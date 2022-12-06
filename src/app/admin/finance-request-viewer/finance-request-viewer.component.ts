import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {BreakpointObserver} from '@angular/cdk/layout';
import {FinanceRequestLogCollectionSegment, Query} from "../../../service/graphql";
import * as _ from "underscore";

const REQUEST_QUERY = gql`
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


@Component({
  selector: 'app-finance-request-viewer',
  templateUrl: './finance-request-viewer.component.html',
  styleUrls: ['./finance-request-viewer.component.scss']
})
export class FinanceRequestViewerComponent implements OnInit {

  chosenRequest: any;
  chosenRequestId: any;
  chosenRequestHistory: any = [];


  medBreakpoint = this.breakpointObserver.observe(['(max-width: 768px)']);

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.chosenRequestId = paramMap.get('id')
      this.getFinanceRequests(this.chosenRequestId)
      this.getFinanceRequestsHistory(0)
    });
  }

  getFinanceRequests(FinanceRequestId: any) {

    this.apollo.watchQuery<Query>({
      query: REQUEST_QUERY,
      variables: {
        FinanceRequestId: FinanceRequestId
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.chosenRequest = data.FinanceRequests![0];
      console.log(this.chosenRequest)

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


}
