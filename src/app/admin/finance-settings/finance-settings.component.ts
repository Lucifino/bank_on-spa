import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {v4 as uuidv4} from "uuid";
import {
  Mutation,
  Query
} from "../../../service/graphql";

const UPSERT_FINANCE_STATUS_MUTATION = gql`
  mutation ($input: [FinanceRequestStatusInput!]!) {
    UpsertFinanceRequestStatuses(input: $input) {
      ResponseCode
      ResponseLabel
      ResponseMessage
    }
  }`;

const UPSERT_FINANCE_PRODUCT_MUTATION = gql`
  mutation ($input: [FinanceProductInput!]!) {
    UpsertFinanceProducts(input: $input) {
      ResponseCode
      ResponseLabel
      ResponseMessage
    }
  }`;

const UPSERT_BLACK_LIST_MUTATION = gql`
  mutation ($input: [BlackListGroupInput!]!) {
    UpsertBlackListGroup(input: $input) {
      ResponseCode
      ResponseLabel
      ResponseMessage
    }
  }`;

const FINANCE_STATUS_PAGINATED_QUERY = gql`
  query {
    FinanceRequestStatusesPagnated {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      totalCount
      items {
        FinanceRequestStatusId
        Title
        Description
        _case
        _Deleted
      }
    }
  }
`;

const FINANCE_PRODUCT_PAGINATED_QUERY = gql`
  query {
    FinanceProductsPaginated {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      totalCount
      items{
        FinanceProductId
        Title
        Description
        InterestRate
        TermMin
        AmountMin
        _Deleted
        MonthsFree
        EstablishmentRate
      }
    }
  }
`;

const BLACK_LIST_PAGINATED_QUERY = gql`
  query {
    BlackListGroupsPaginated {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      totalCount
      items{
        BlackListGroupId
        Title
        Expression
        _Deleted
        _case
      }
    }
  }
`;

@Component({
  selector: 'app-finance-settings',
  templateUrl: './finance-settings.component.html',
  styleUrls: ['./finance-settings.component.scss']
})
export class FinanceSettingsComponent implements OnInit {

  libraryForm: FormGroup = new FormGroup({
    financeStatusFormArray: new FormArray([]),
    financeProductFormArray: new FormArray([]),
    blackListGroupFormArray: new FormArray([])
  })

  get financeStatusFormArray(): FormArray {
    return this.libraryForm.get('financeStatusFormArray') as FormArray;
  }
  get financeProductFormArray(): FormArray {
    return this.libraryForm.get('financeProductFormArray') as FormArray;
  }

  get blackListGroupFormArray(): FormArray {
    return this.libraryForm.get('blackListGroupFormArray') as FormArray;
  }

  addFinanceStatusFormArray(status?: any): void {
    if ((!this.financeStatusFormArray.value.some((m: any) => m.FinanceRequestStatusId == status?.FinanceRequestStatusId) && status) || !status) {
      this.financeStatusFormArray.push(new FormGroup({
        Description: new FormControl(status?.Description),
        FinanceRequestStatusId: new FormControl(status?.FinanceRequestStatusId  ?? uuidv4()),
        Title: new FormControl(status?.Title),
        _case: new FormControl(status?._case ?? -1),
        _Deleted: new FormControl(status?._Deleted?? false)
      }));
    }
  }

  addFinanceProductFormArray(product?: any): void {
    if ((!this.financeProductFormArray.value.some((m: any) => m.FinanceProductId == product?.FinanceProductId) && product) || !product) {
      this.financeProductFormArray.push(new FormGroup({
        Description: new FormControl(product?.Description),
        FinanceProductId: new FormControl(product?.FinanceProductId  ?? uuidv4()),
        Title: new FormControl(product?.Title),
        InterestRate: new FormControl(product?.InterestRate),
        TermMin: new FormControl(product?.TermMin ?? -1),
        AmountMin: new FormControl(product?.AmountMin),
        MonthsFree: new FormControl(product?.MonthsFree),
        EstablishmentRate: new FormControl(product?.EstablishmentRate),
        _Deleted: new FormControl(product?._Deleted?? false)
      }));
    }
  }

  addBlackListGroupFormArray(group?: any): void {
    if ((!this.blackListGroupFormArray.value.some((m: any) => m.BlackListGroupId == group?.BlackListGroupId) && group) || !group) {
      this.blackListGroupFormArray.push(new FormGroup({
        Expression: new FormControl(group?.Expression),
        BlackListGroupId: new FormControl(group?.BlackListGroupId  ?? uuidv4()),
        Title: new FormControl(group?.Title),
        _case: new FormControl(group?._case),
        _Deleted: new FormControl(group?._Deleted?? false)
      }));
    }
  }

  constructor(

    private apollo: Apollo,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.getFinanceProducts()
    this.getFinanceStatuses()
    this.getBlackListGroups()
  }

  saveFinanceStatuses() {
    console.log(this.financeStatusFormArray.value)
    this.apollo.mutate<Mutation>({
      mutation: UPSERT_FINANCE_STATUS_MUTATION,
      variables: {
        input: this.financeStatusFormArray.value
      }
    }).subscribe(m => {
      if (m.data?.UpsertFinanceRequestStatuses.ResponseCode === 202) {
        console.log(m)
        this.confirmationService.confirm({
          acceptVisible: true,
          acceptLabel: 'Continue',
          rejectVisible: false,
          message: 'Statuses successfully updated',
          accept: () => {
            this.getFinanceStatuses();
          }
        })
      };
    });
  }

  getFinanceStatuses(): void {
    this.apollo.watchQuery<Query>({
      query: FINANCE_STATUS_PAGINATED_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      data.FinanceRequestStatusesPagnated?.items?.forEach(m => {
        this.addFinanceStatusFormArray(m);
      });
    });
  }

  saveFinanceProducts() {
    this.apollo.mutate<Mutation>({
      mutation: UPSERT_FINANCE_PRODUCT_MUTATION,
      variables: {
        input: this.financeProductFormArray.value
      }
    }).subscribe(m => {
      if (m.data?.UpsertFinanceProducts.ResponseCode === 202) {
        console.log(m)
        this.confirmationService.confirm({
          acceptVisible: true,
          acceptLabel: 'Continue',
          rejectVisible: false,
          message: 'Products successfully updated',
          accept: () => {
            this.getFinanceProducts();
          }
        })
      };
    });
  }

  getFinanceProducts(): void {
    this.apollo.watchQuery<Query>({
      query: FINANCE_PRODUCT_PAGINATED_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      data.FinanceProductsPaginated?.items?.forEach(m => {
        this.addFinanceProductFormArray(m);
      });
    });
  }

  saveBlackListGroups() {
    console.log(this.blackListGroupFormArray.value)
    this.apollo.mutate<Mutation>({
      mutation: UPSERT_BLACK_LIST_MUTATION,
      variables: {
        input: this.blackListGroupFormArray.value
      }
    }).subscribe(m => {
      if (m.data?.UpsertBlackListGroup.ResponseCode === 202) {
        console.log(m)
        this.confirmationService.confirm({
          acceptVisible: true,
          acceptLabel: 'Continue',
          rejectVisible: false,
          message: 'BlackList Groups successfully updated',
          accept: () => {
            this.getBlackListGroups();
          }
        })
      };
    });
  }

  getBlackListGroups(): void {
    this.apollo.watchQuery<Query>({
      query: BLACK_LIST_PAGINATED_QUERY
    }).valueChanges.subscribe(({ data, loading }) => {
      data.BlackListGroupsPaginated?.items?.forEach(m => {
        this.addBlackListGroupFormArray(m);
      });
    });
  }

  removeFinanceProduct(FinanceProduct: any) {
    console.log(FinanceProduct)
    FinanceProduct.controls['_Deleted'].setValue(true);
  }

  removeFinanceStatus(FinanceStatus: any) {
    console.log(FinanceStatus)
    FinanceStatus.controls['_Deleted'].setValue(true);
  }

  removeBlackListGroup(Group: any) {
    console.log(Group)
    Group.controls['_Deleted'].setValue(true);
  }

}
