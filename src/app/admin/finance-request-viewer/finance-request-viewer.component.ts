import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {BreakpointObserver} from '@angular/cdk/layout';
import {FinanceRequestLogCollectionSegment, Mutation, Query} from "../../../service/graphql";
import * as _ from "underscore";
import {differenceInYears, formatISO} from "date-fns";

const REQUEST_QUERY = gql`
  query ($FinanceRequestId: UUID){
    FinanceRequests (
      where: {
        FinanceRequestId: {eq: $FinanceRequestId}
      }) {
        FinanceRequestId
        ReferenceNo
        AmountRequired
        FinanceProductId
        FinanceProduct{
          Title
          InterestRate

        }
        FinanceRequestStatusId
        FinanceRequestStatus{
          Title
        }
        FirstName
        LastName
        Title
        DateOfApplication
        MonthlyRepayment
        TotalRepayment
        DateOfBirth
        Mobile
        Email
        Term
        _UnderAgeFlag
        _BlackListDomainFlag
        _BlackListMobileFlag


    }
  }
`;

const PRODUCTS_QUERY = gql`
  query {
    FinanceProducts  {

      MonthsFree
      EstablishmentRate
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

const STATUSES_QUERY = gql`
  query {
    FinanceRequestStatuses  {
      FinanceRequestStatusId
      _case
      Title
      Description
      _Deleted

    }
  }
`;

const REQUEST_HISTORY_QUERY = gql`
  query ($skip: Int, $take: Int, $FinanceRequestId: UUID){
    FinanceRequestLogsPaginated (
      skip: $skip,
      take: $take
      where: {
        FinanceRequestId: {eq: $FinanceRequestId}
      },
      order: {DateCreated: DESC}
    ) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      totalCount
      items {
        Title
        Description
        Content
        DateCreated
      }

    }
  }
`;

const UPDATE_FINANCE_REQUEST_MUTATION = gql`
  mutation ($edit: FinanceRequestInput!) {
    UpdateFinanceRequestAdmin(edit: $edit) {
      ResponseMessage
      ResponseLabel
      ResponseCode
    }
  }
`;

@Component({
  selector: 'app-finance-request-viewer',
  templateUrl: './finance-request-viewer.component.html',
  styleUrls: ['./finance-request-viewer.component.scss']
})
export class FinanceRequestViewerComponent implements OnInit {
  titleDropdown: any = [];

  monthMin: number = 0;
  monthMax: number = 30;

  amountMin: number = 0;
  amountMax: number = 1000000;

  EstablishmentFree: any;
  updateFinanceRequestDialogVisible: boolean = false;

  chosenProduct: any;
  chosenRequest: any;
  chosenRequestId: any;
  chosenRequestHistory: any = [];

  financeStatuses: any = [];
  financeProducts: any = [];

  adminFinanceRequestForm = this.formBuilder.group({
    AmountRequired: new FormControl(),
    Term: new FormControl(),
    Title: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    DateOfBirth: new FormControl(),
    Mobile: new FormControl(),
    Email: new FormControl(),
    ReferenceNo: new FormControl(),
    FinanceProductId: new FormControl(),
    FinanceRequestId: new FormControl(),
    FinanceRequestStatusId: new FormControl(),
    TotalRepayment: new FormControl(),
    MonthlyRepayment: new FormControl(),
    _UnderAgeFlag: new FormControl(),
    _BlackListMobileFlag: new FormControl(),
    _BlackListDomainFlag: new FormControl()

  });


  medBreakpoint = this.breakpointObserver.observe(['(max-width: 768px)']);

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private apollo: Apollo,
    private router: Router,
  )
  {
    this.titleDropdown = [
      {code: "Mr.", label: "Mr."},
      {code: "Ms.", label: "Ms."},
      {code: "Mrs.", label: "Mrs."}
    ]
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.chosenRequestId = paramMap.get('id')
      this.getFinanceStatuses()
      this.getFinanceProducts()
      this.getFinanceRequestsHistory(0)
    });
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

  getFinanceRequest(FinanceRequestId: any) {

    this.apollo.watchQuery<Query>({
      query: REQUEST_QUERY,
      variables: {
        FinanceRequestId: FinanceRequestId
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.chosenRequest = data.FinanceRequests![0];
      console.log(this.chosenRequest)

      let submitRequest = this.chosenRequest

      let dateParser = new Date(submitRequest.DateOfBirth)


      this.adminFinanceRequestForm.patchValue(submitRequest)


      this.adminFinanceRequestForm.patchValue({DateOfBirth: dateParser})

      this.adminFinanceRequestForm.patchValue({DateOfBirth: dateParser})

      this.chosenProduct = this.financeProducts.find((x:any) => x.FinanceProductId == this.adminFinanceRequestForm.value.FinanceProductId)

      this.calculateRepayment(this.chosenProduct);

    });
  }

  getFinanceRequestsHistory(skip = 0) {

    this.apollo.watchQuery<Query>({
      query: REQUEST_HISTORY_QUERY,
      variables: {
        FinanceRequestId: this.chosenRequestId
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.chosenRequestHistory = data.FinanceRequestLogsPaginated as FinanceRequestLogCollectionSegment;
      console.log(this.chosenRequestHistory)

    });
  }

  calculateRepayment(financeProduct: any)
  {
    let amountAsk = this.adminFinanceRequestForm.value.AmountRequired
    let interest = 1 + financeProduct.InterestRate
    let months = this.adminFinanceRequestForm.value.Term * 3
    let monthsFree = financeProduct.MonthsFree
    let estabRate = this.chosenProduct.EstablishmentRate
    let estabFee = amountAsk * estabRate
    let interestPerMonth = interest/months
    let loanMonthlyPartition = amountAsk / months
    let freeMonthCounter = 0;
    let totalLoan = 0

    this.amountMin = financeProduct.AmountMin
    this.monthMin = financeProduct.TermMin

    if(this.adminFinanceRequestForm.value < this.monthMin) this.adminFinanceRequestForm.patchValue({Term: financeProduct.TermMin})

    if(this.adminFinanceRequestForm.value < this.amountMin) this.adminFinanceRequestForm.patchValue({AmountRequired: financeProduct.AmountMin})

    console.log(loanMonthlyPartition)
    console.log(interestPerMonth)
    console.log(loanMonthlyPartition * months)
    console.log((loanMonthlyPartition * (1+interestPerMonth)))
    console.log((loanMonthlyPartition * (1+interestPerMonth)) * months)

    for(var i = 0; i < months; i++)
    {
      if(i >= monthsFree)
      {
        totalLoan = totalLoan + (loanMonthlyPartition * interest)
      }
      else
      {
        totalLoan = totalLoan + loanMonthlyPartition
      }
    }

    this.EstablishmentFree = estabFee

    totalLoan = totalLoan + estabFee
    let monthlyPayment = totalLoan / months

    this.adminFinanceRequestForm.patchValue({TotalRepayment: totalLoan})
    this.adminFinanceRequestForm.patchValue({MonthlyRepayment: monthlyPayment})

  }

  updateFinanceRequest()
  {
    this.adminFinanceRequestForm.patchValue({DateOfBirth: formatISO(new Date(this.adminFinanceRequestForm.value.DateOfBirth) , {representation: 'date'})})

    let editValue = this.adminFinanceRequestForm.value

    this.apollo.mutate<Mutation>({
      mutation: UPDATE_FINANCE_REQUEST_MUTATION,
      variables: {
        edit: editValue
      },
      context: {
        useMultipart: true
      }
    }).subscribe(m => {
      console.log(m)

      if(m.data?.UpdateFinanceRequestAdmin.ResponseCode === 202) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.UpdateFinanceRequestAdmin.ResponseMessage ?? 'Update Successful',
          acceptLabel: 'Continue',
          accept: () => {
            this.updateFinanceRequestDialogVisible = false;
            this.ngOnInit()
          }
        })
      }

      if(m.data?.UpdateFinanceRequestAdmin.ResponseCode === 400) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.UpdateFinanceRequestAdmin.ResponseMessage ?? 'Wrong Inputs',
          acceptLabel: 'Continue'
        })
      }

      if(m.data?.UpdateFinanceRequestAdmin.ResponseCode === 500) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.UpdateFinanceRequestAdmin.ResponseMessage ?? 'Server Error',
          acceptLabel: 'Continue'
        })
      }


    });
  }

  calculateProduct()
  {
    this.chosenProduct = this.financeProducts.find((x:any) => x.FinanceProductId == this.adminFinanceRequestForm.value.FinanceProductId)

    this.calculateRepayment(this.chosenProduct);

  }

  updateForm(event:any)
  {
    console.log(event)
    this.updateFinanceRequestDialogVisible = true
    console.log(this.updateFinanceRequestDialogVisible)
  }

  routeToCalculate()
  {

    this.router.navigate([`admin/calculate/${this.chosenRequestId}`]);
  }

}
