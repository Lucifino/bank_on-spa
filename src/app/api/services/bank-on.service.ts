/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FinanceRequestProxy } from '../models/finance-request-proxy';

@Injectable({
  providedIn: 'root',
})
export class BankOnService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiBankOnSaveFinanceRequestAndRedirectPost
   */
  static readonly ApiBankOnSaveFinanceRequestAndRedirectPostPath = '/api/BankOn/SaveFinanceRequestAndRedirect';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankOnSaveFinanceRequestAndRedirectPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankOnSaveFinanceRequestAndRedirectPost$Plain$Response(params?: {
    body?: FinanceRequestProxy
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, BankOnService.ApiBankOnSaveFinanceRequestAndRedirectPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBankOnSaveFinanceRequestAndRedirectPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankOnSaveFinanceRequestAndRedirectPost$Plain(params?: {
    body?: FinanceRequestProxy
  }): Observable<string> {

    return this.apiBankOnSaveFinanceRequestAndRedirectPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankOnSaveFinanceRequestAndRedirectPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankOnSaveFinanceRequestAndRedirectPost$Json$Response(params?: {
    body?: FinanceRequestProxy
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, BankOnService.ApiBankOnSaveFinanceRequestAndRedirectPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBankOnSaveFinanceRequestAndRedirectPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankOnSaveFinanceRequestAndRedirectPost$Json(params?: {
    body?: FinanceRequestProxy
  }): Observable<string> {

    return this.apiBankOnSaveFinanceRequestAndRedirectPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
