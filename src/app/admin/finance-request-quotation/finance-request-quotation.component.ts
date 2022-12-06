import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {Mutation, Query} from "../../../service/graphql";
import {formatISO} from "date-fns";

const REQUESTS_QUERY = gql`
  query ($FinanceRequestId: UUID){
    FinanceRequests (
      where: {
        FinanceRequestId: {eq: $FinanceRequestId}
      }) {

      ReferenceNo
      AmountRequired
      FinanceRequestId
      FinanceProductId
      FinanceProduct{
        Title
      }
      FinanceRequestStatusId
      FinanceRequestStatus{
        Title
      }
      FirstName
      LastName
      Title
      DateOfApplication
      Term
      DateOfBirth
      Email
      Mobile

    }
  }
`;

const STATUSES_QUERY = gql`
  query {
    FinanceRequestStatuses  {
      FinanceRequestStatusId
      _case

    }
  }
`;

const PRODUCTS_QUERY = gql`
  query {
    FinanceProducts  {

      MonthsFree
      FinanceProductId
      AmountMin
      TermMin
      Title
      InterestRate
      Description
      _Deleted

    }
  }
`;

const UPDATE_FINANCE_REQUEST_MUTATION = gql`
  mutation ($edit: FinanceRequestInput!) {
    UpdateFinanceRequest(edit: $edit) {
      ResponseMessage
      ResponseLabel
      ResponseCode
    }
  }
`;

const APPLY_FINANCE_REQUEST_MUTATION = gql`
  mutation ($edit: FinanceRequestInput!) {
    ApplyFinanceRequest(edit: $edit) {
      ResponseMessage
      ResponseLabel
      ResponseCode
    }
  }
`;


@Component({
  selector: 'app-finance-request-quotation',
  templateUrl: './finance-request-quotation.component.html',
  styleUrls: ['./finance-request-quotation.component.scss']
})
export class FinanceRequestQuotationComponent implements OnInit {

  financeStatuses: any = [];
  financeProducts: any = [];
  submittedStatus: any;

  chosenRequest: any;
  chosenRequestId: any;
  chosenProduct: any;

  quoteFinanceRequestForm = this.formBuilder.group({
    AmountRequired: new FormControl(),
    Term: new FormControl(),
    Title: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    DateOfBirth: new FormControl(),
    Mobile: new FormControl(),
    Email: new FormControl(),
    FinanceProductId: new FormControl(),
    FinanceRequestId: new FormControl(),
    FinanceRequestStatusId: new FormControl(),
    TotalRepayment: new FormControl(),
    MonthlyRepayment: new FormControl()

  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private titleService: Title,
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.chosenRequestId = paramMap.get('id')
      this.getFinanceProducts()
      this.getFinanceStatuses()
    });
  }

  getFinanceRequest(FinanceRequestId: any) {

    this.apollo.watchQuery<Query>({
      query: REQUESTS_QUERY,
      variables: {
        FinanceRequestId: FinanceRequestId
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.chosenRequest = data.FinanceRequests![0];
      console.log(this.chosenRequest)

      let submitRequest = this.chosenRequest

      this.quoteFinanceRequestForm.patchValue(submitRequest)

      this.chosenProduct = this.financeProducts.find((x:any) => x.FinanceProductId == this.quoteFinanceRequestForm.value.FinanceProductId)

      this.calculateRepayment(this.chosenProduct.FinanceProductId);
    });
  }

  editFinanceRequest()
  {
    this.quoteFinanceRequestForm.patchValue({DateOfBirth: formatISO(new Date(this.quoteFinanceRequestForm.value.DateOfBirth) , {representation: 'date'})})

    let editValue = this.quoteFinanceRequestForm.value

    this.apollo.mutate<Mutation>({
      mutation: APPLY_FINANCE_REQUEST_MUTATION,
      variables: {
        edit: editValue
      },
      context: {
        useMultipart: true
      }
    }).subscribe(m => {
      console.log(m)

      if(m.data?.ApplyFinanceRequest.ResponseCode === 202) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.ApplyFinanceRequest.ResponseMessage ?? '',
          acceptLabel: 'Continue',
          accept: () => {
            this.router.navigate([`admin/viewer/${this.chosenRequestId}`]);
          }
        })
      };
    });
  }

  calculateRepayment(financeProduct: any)
  {
    let amountAsk = this.quoteFinanceRequestForm.value.AmountRequired
    let interest = 1 + financeProduct.InterestRate
    let months = this.quoteFinanceRequestForm.value.Term * 3
    let monthsFree = financeProduct.MonthsFree
    let estabFee = 300
    let interestPerMonth = interest/months
    let loanMonthlyPartition = amountAsk / months
    let freeMonthCounter = 0;
    let totalLoan = 0

    for(var i = 0; i < months; i++)
    {
      if(freeMonthCounter >= monthsFree)
      {
        totalLoan = totalLoan + (loanMonthlyPartition * interestPerMonth)
      }
      else
      {
        totalLoan = totalLoan + loanMonthlyPartition
      }
    }

    totalLoan = totalLoan + estabFee
    let monthlyPayment = totalLoan / months

    this.quoteFinanceRequestForm.patchValue({TotalRepayment: totalLoan})
    this.quoteFinanceRequestForm.patchValue({MonthlyRepayment: monthlyPayment})

  }

  getFinanceStatuses() {

    this.apollo.watchQuery<Query>({
      query: STATUSES_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.financeStatuses = data.FinanceRequestStatuses;
      console.log(this.financeStatuses)


    });
  }

  getFinanceProducts() {

    this.apollo.watchQuery<Query>({
      query: PRODUCTS_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.financeProducts = data.FinanceProducts;
      console.log(this.financeProducts)


      this.getFinanceRequest(this.chosenRequestId)
    });
  }


}
