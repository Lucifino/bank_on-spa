import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {Mutation, Query} from "../../../service/graphql";
import {formatISO, isDate, parseISO} from "date-fns";

const REQUESTS_QUERY = gql`
  query ($FinanceRequestId: UUID){
    FinanceRequests (
      where: {
        FinanceRequestId: {eq: $FinanceRequestId}
      }) {

      ReferenceNo
      AmountRequired
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
      FinanceRequestId
      Mobile
      Email
      Term
      DateOfBirth
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


@Component({
  selector: 'app-finance-request-calculator',
  templateUrl: './finance-request-calculator.component.html',
  styleUrls: ['./finance-request-calculator.component.scss']
})
export class FinanceRequestCalculatorComponent implements OnInit {


  chosenRequest: any;
  chosenRequestId: any;

  financeProductsDropdown: any = [];
  titleDropdown: any = [];

  calculateFinanceRequestForm = this.formBuilder.group({
    AmountRequired: new FormControl(),
    Term: new FormControl(),
    Title: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    DateOfBirth: new FormControl(),
    Mobile: new FormControl(),
    Email: new FormControl(),
    FinanceProductId: new FormControl(),
    FinanceRequestId: new FormControl()

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
      this.getFinanceRequest(this.chosenRequestId)
      this.getFinanceProducts()
      this.titleDropdown = [
        {code: "Mr.", label: "Mr."},
        {code: "Ms.", label: "Ms."},
        {code: "Mrs.", label: "Mrs."}
      ]
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
      const request = this.chosenRequest

      let dateParser =  request.DateOfBirth

      dateParser = new Date(request.DateOfBirth)

      console.log(request)


      this.calculateFinanceRequestForm.patchValue(request)

      this.calculateFinanceRequestForm.patchValue({DateOfBirth: dateParser})

      console.log(this.calculateFinanceRequestForm.value)
    });
  }

  editFinanceRequest()
  {
    this.calculateFinanceRequestForm.patchValue({DateOfBirth: formatISO(new Date(this.calculateFinanceRequestForm.value.DateOfBirth) , {representation: 'date'})})

    let editValue = this.calculateFinanceRequestForm.value

    console.log(editValue)

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

      if(m.data?.UpdateFinanceRequest.ResponseCode === 202) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.UpdateFinanceRequest.ResponseMessage ?? '',
          acceptLabel: 'Continue',
          accept: () => {
            this.router.navigate([`admin/quotation/${this.chosenRequestId}`]);
          }
        })
      };
    });
  }


  getFinanceProducts() {

    this.apollo.watchQuery<Query>({
      query: PRODUCTS_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.financeProductsDropdown = data.FinanceProducts;
      console.log(this.financeProductsDropdown)
    });
  }

}
