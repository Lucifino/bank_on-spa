import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {formatISO, getYear, format} from 'date-fns';
import {
  FinanceProductCollectionSegment, FinanceRequestCollectionSegment, FinanceRequestFilterInput,
  Mutation,
  Query,
} from "../../../service/graphql";
import * as _ from "underscore";
import {v4 as uuidv4} from "uuid";
import {BankOnService} from "../../api/services/bank-on.service";
import {FinanceRequestProxy} from "../../api/models/finance-request-proxy";


const REQUESTS_QUERY = gql`
  query ($skip: Int, $take: Int, $where: FinanceRequestFilterInput){
    FinanceRequestsPaginated (
      skip: $skip,
      where: $where,
      take: $take) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      totalCount
      items {
        ReferenceNo
        AmountRequired
        FinanceProductId
        FinanceRequestId
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

      }
    }
  }
`;

const ADD_FINANCE_REQUEST_MUTATION = gql`
  mutation ($input: FinanceRequestProxyInput!) {
    AddFinanceRequest(input: $input) {
      ResponseMessage
      ResponseLabel
      ResponseCode
    }
  }
`;

@Component({
  selector: 'app-finance-request-overview',
  templateUrl: './finance-request-overview.component.html',
  styleUrls: ['./finance-request-overview.component.scss']
})
export class FinanceRequestOverviewComponent implements OnInit {

  addFinanceRequestDialogVisible: boolean = false;

  selectedFinanceRequest: any;

  financeProductsDropdown: any = [];
  financeStatusDropdown: any = [];
  titleDropdown: any = [];

  FinanceProductsGroup: FinanceProductCollectionSegment = {
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false
    },
    totalCount: 0,
    items: []
  };

  FinanceRequestsGroup: FinanceRequestCollectionSegment = {
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false
    },
    totalCount: 0,
    items: []
  };


  requestTableFilter = this.formBuilder.group({
    Name: new FormControl(),
    ReferenceNo: new FormControl(),
    DateOfPurchase: new FormControl(),
    FinanceProductId: new FormControl(),
    FinanceRequestStatusId: new FormControl(),
  });

  financeRequestForm = this.formBuilder.group({
    AmountRequired: new FormControl(),
    Term: new FormControl(),
    Title: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    DateOfBirth: new FormControl(),
    Mobile: new FormControl(),
    Email: new FormControl()

  });


  constructor( private activatedRoute: ActivatedRoute,
               private formBuilder: FormBuilder,
               private confirmationService: ConfirmationService,
               private titleService: Title,
               private router: Router,
               private apollo: Apollo,
               private bankOnService: BankOnService,

  )
  {
   this.titleDropdown = [
     {code: "Mr.", label: "Mr."},
     {code: "Ms.", label: "Ms."},
     {code: "Mrs.", label: "Mrs."}
   ]
  }

  ngOnInit(): void {
    console.log(formatISO(new Date().getUTCDate()));
    var testDate = new Date()
    console.log(`${testDate.getDate()}-${testDate.getMonth()}-${testDate.getUTCFullYear()}`)
    this.getFinanceRequestsPaginated()
  }

  getFinanceRequestsPaginated(skip: number = 0) {

    let filter: FinanceRequestFilterInput = {};

    if (this.requestTableFilter.value.Name) {
      filter.or = [
        {
          LastName: {
            contains: this.requestTableFilter.value.Name
          }
        },
        {
          FirstName: {
            contains: this.requestTableFilter.value.Name
          }
        }];
    }

    if (this.requestTableFilter.value.ReferenceNo) {
      filter.ReferenceNo = {
        contains: this.requestTableFilter.value.ReferenceNo
      }
    }
    if (this.requestTableFilter.value.FinanceProductId) {
      filter.FinanceProductId = {
        eq: this.requestTableFilter.value.FinanceProductId
      }
    }
    if (this.requestTableFilter.value.FinanceRequestStatusId) {
      filter.FinanceRequestStatusId = {
        eq: this.requestTableFilter.value.FinanceRequestStatusId
      }
    }

    this.apollo.watchQuery<Query>({
      query: REQUESTS_QUERY,
      variables: {
        skip,
        take: 10,
        where: !_.isEmpty(filter) ? filter : undefined,
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.FinanceRequestsGroup = data.FinanceRequestsPaginated as FinanceRequestCollectionSegment;
      console.log(this.FinanceRequestsGroup)
    });
  }

  checkFinanceRequest(event:any)
  {
    console.log(event)
    this.router.navigate([`admin/calculate/${event.data.FinanceRequestId}`]);
  }

  addFinanceRequest()
  {
    this.financeRequestForm.patchValue({DateOfBirth: formatISO(new Date(this.financeRequestForm.value.DateOfBirth) , {representation: 'date'})})

    let inputValue = this.financeRequestForm.value



    this.apollo.mutate<Mutation>({
        mutation: ADD_FINANCE_REQUEST_MUTATION,
      variables: {
        input: inputValue
      },
      context: {
        useMultipart: true
      }
    }).subscribe(m => {
      console.log(m)

      if(m.data?.AddFinanceRequest.ResponseCode === 200) {
        this.confirmationService.confirm({
          acceptVisible: true,
          rejectVisible: false,
          message: m.data?.AddFinanceRequest.ResponseMessage ?? '',
          acceptLabel: 'Continue',
          accept: () => {
            this.router.navigate([`calculate/${m.data?.AddFinanceRequest.ResponseMessage}`]);
          }
        })
      };
    });
  }

  insertFinanceRequest(): void {
    let testDate = new Date(this.financeRequestForm.value.DateOfBirth)
    var dateOfBirth = `${testDate.getUTCFullYear()}-${testDate.getMonth()}-${testDate.getDate()}`
    let newRequest: FinanceRequestProxy = {
        amountRequired: this.financeRequestForm.value.AmountRequired,
        term: this.financeRequestForm.value.Term,
        title: this.financeRequestForm.value.Title,
        firstName: this.financeRequestForm.value.FirstName,
        lastName: this.financeRequestForm.value.LastName,
        dateOfBirth: format(new Date(this.financeRequestForm.value.DateOfBirth), 'yyyy-MM-dd'),
        mobile: this.financeRequestForm.value.Mobile,
        email: this.financeRequestForm.value.Email,
    }

    this.bankOnService.apiBankOnSaveFinanceRequestAndRedirectPost$Response({
      body: newRequest
    }).subscribe(m => {
      console.log(m)


    });
  }


}
