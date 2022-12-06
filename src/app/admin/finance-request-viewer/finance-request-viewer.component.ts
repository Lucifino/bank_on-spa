import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {Apollo, gql} from "apollo-angular";
import {FinanceRequestCollectionSegment, FinanceRequestFilterInput, Query} from "../../../service/graphql";
import * as _ from "underscore";

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
        DateOfApplication

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

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private titleService: Title,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.chosenRequestId = paramMap.get('id')
      this.getFinanceRequestsPaginated(this.chosenRequestId)
    });
  }

  getFinanceRequestsPaginated(FinanceRequestId: any) {

    this.apollo.watchQuery<Query>({
      query: REQUESTS_QUERY,
      variables: {
        FinanceRequestId: FinanceRequestId
      }
    }).valueChanges.subscribe(({ data, loading }) => {
      console.log(data)
      this.chosenRequest = data.FinanceRequests![0];
      console.log(this.chosenRequest)
    });
  }


}
