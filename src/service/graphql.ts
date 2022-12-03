import { gql } from 'apollo-angular';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** Represents an instant on the global timeline, with nanosecond resolution. */
  Instant: any;
  /** LocalDate is an immutable struct representing a date within the calendar, with no reference to a particular time zone or time of day. */
  LocalDate: any;
  /** LocalTime is an immutable struct representing a time of day, with no reference to a particular calendar, time zone or date. */
  LocalTime: any;
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
};

export type ComparableGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<Scalars['UUID']>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableNullableOfInstantOperationFilterInput = {
  eq?: InputMaybe<Scalars['Instant']>;
  gt?: InputMaybe<Scalars['Instant']>;
  gte?: InputMaybe<Scalars['Instant']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Instant']>>>;
  lt?: InputMaybe<Scalars['Instant']>;
  lte?: InputMaybe<Scalars['Instant']>;
  neq?: InputMaybe<Scalars['Instant']>;
  ngt?: InputMaybe<Scalars['Instant']>;
  ngte?: InputMaybe<Scalars['Instant']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Instant']>>>;
  nlt?: InputMaybe<Scalars['Instant']>;
  nlte?: InputMaybe<Scalars['Instant']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfLocalDateOperationFilterInput = {
  eq?: InputMaybe<Scalars['LocalDate']>;
  gt?: InputMaybe<Scalars['LocalDate']>;
  gte?: InputMaybe<Scalars['LocalDate']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']>>>;
  lt?: InputMaybe<Scalars['LocalDate']>;
  lte?: InputMaybe<Scalars['LocalDate']>;
  neq?: InputMaybe<Scalars['LocalDate']>;
  ngt?: InputMaybe<Scalars['LocalDate']>;
  ngte?: InputMaybe<Scalars['LocalDate']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']>>>;
  nlt?: InputMaybe<Scalars['LocalDate']>;
  nlte?: InputMaybe<Scalars['LocalDate']>;
};

export type ListFilterInputTypeOffinance_RequestFilterInput = {
  all?: InputMaybe<Finance_RequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Finance_RequestFilterInput>;
  some?: InputMaybe<Finance_RequestFilterInput>;
};

export type ListFilterInputTypeOffinance_Request_LogFilterInput = {
  all?: InputMaybe<Finance_Request_LogFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Finance_Request_LogFilterInput>;
  some?: InputMaybe<Finance_Request_LogFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFinanceRequest: Response;
  updateFinanceRequest: Response;
  upsertFinanceProducts: Response;
  upsertFinanceRequestStatuses: Response;
};


export type MutationAddFinanceRequestArgs = {
  input: Finance_RequestInput;
};


export type MutationUpdateFinanceRequestArgs = {
  edit: Finance_RequestInput;
};


export type MutationUpsertFinanceProductsArgs = {
  input: Array<Finance_ProductInput>;
};


export type MutationUpsertFinanceRequestStatusesArgs = {
  input: Array<Finance_Request_StatusInput>;
};

export type Query = {
  __typename?: 'Query';
  financeProducts: Array<Finance_Product>;
  financeProductsPaginated?: Maybe<Finance_ProductCollectionSegment>;
  financeRequestLogs: Array<Finance_Request_Log>;
  financeRequestLogsPaginated?: Maybe<Finance_Request_LogCollectionSegment>;
  financeRequestStatuses: Array<Finance_Request_Status>;
  financeRequestStatusesPagnated?: Maybe<Finance_Request_StatusCollectionSegment>;
  financeRequests: Array<Finance_Request>;
  financeRequestsPaginated?: Maybe<Finance_RequestCollectionSegment>;
};


export type QueryFinanceProductsArgs = {
  order?: InputMaybe<Array<Finance_ProductSortInput>>;
  where?: InputMaybe<Finance_ProductFilterInput>;
};


export type QueryFinanceProductsPaginatedArgs = {
  order?: InputMaybe<Array<Finance_ProductSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Finance_ProductFilterInput>;
};


export type QueryFinanceRequestLogsArgs = {
  order?: InputMaybe<Array<Finance_Request_LogSortInput>>;
  where?: InputMaybe<Finance_Request_LogFilterInput>;
};


export type QueryFinanceRequestLogsPaginatedArgs = {
  order?: InputMaybe<Array<Finance_Request_LogSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Finance_Request_LogFilterInput>;
};


export type QueryFinanceRequestStatusesArgs = {
  order?: InputMaybe<Array<Finance_Request_StatusSortInput>>;
  where?: InputMaybe<Finance_Request_StatusFilterInput>;
};


export type QueryFinanceRequestStatusesPagnatedArgs = {
  order?: InputMaybe<Array<Finance_Request_StatusSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Finance_Request_StatusFilterInput>;
};


export type QueryFinanceRequestsArgs = {
  order?: InputMaybe<Array<Finance_RequestSortInput>>;
  where?: InputMaybe<Finance_RequestFilterInput>;
};


export type QueryFinanceRequestsPaginatedArgs = {
  order?: InputMaybe<Array<Finance_RequestSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Finance_RequestFilterInput>;
};

export type Response = {
  __typename?: 'Response';
  responseCode: Scalars['Int'];
  responseLabel?: Maybe<Scalars['String']>;
  responseMessage?: Maybe<Scalars['String']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Finance_Product = {
  __typename?: 'finance_product';
  amount_min?: Maybe<Scalars['Decimal']>;
  description?: Maybe<Scalars['String']>;
  finance_product_id: Scalars['UUID'];
  finance_request: Array<Finance_Request>;
  interest_rate?: Maybe<Scalars['Decimal']>;
  term_min?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Finance_ProductCollectionSegment = {
  __typename?: 'finance_productCollectionSegment';
  items?: Maybe<Array<Finance_Product>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type Finance_ProductFilterInput = {
  amount_min?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: InputMaybe<Array<Finance_ProductFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  finance_product_id?: InputMaybe<ComparableGuidOperationFilterInput>;
  finance_request?: InputMaybe<ListFilterInputTypeOffinance_RequestFilterInput>;
  interest_rate?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  or?: InputMaybe<Array<Finance_ProductFilterInput>>;
  term_min?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Finance_ProductInput = {
  amount_min?: InputMaybe<Scalars['Decimal']>;
  description?: InputMaybe<Scalars['String']>;
  finance_product_id: Scalars['UUID'];
  finance_request: Array<Finance_RequestInput>;
  interest_rate?: InputMaybe<Scalars['Decimal']>;
  term_min?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Finance_ProductSortInput = {
  amount_min?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  finance_product_id?: InputMaybe<SortEnumType>;
  interest_rate?: InputMaybe<SortEnumType>;
  term_min?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type Finance_Request = {
  __typename?: 'finance_request';
  amountRequired?: Maybe<Scalars['Decimal']>;
  dateOfBirth?: Maybe<Scalars['LocalDate']>;
  email?: Maybe<Scalars['String']>;
  finance_product?: Maybe<Finance_Product>;
  finance_product_id?: Maybe<Scalars['UUID']>;
  finance_request_id: Scalars['UUID'];
  finance_request_log: Array<Finance_Request_Log>;
  finance_request_status?: Maybe<Finance_Request_Status>;
  finance_request_status_id?: Maybe<Scalars['UUID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  referenceNo?: Maybe<Scalars['String']>;
  term?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Finance_RequestCollectionSegment = {
  __typename?: 'finance_requestCollectionSegment';
  items?: Maybe<Array<Finance_Request>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type Finance_RequestFilterInput = {
  amountRequired?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  and?: InputMaybe<Array<Finance_RequestFilterInput>>;
  dateOfBirth?: InputMaybe<ComparableNullableOfLocalDateOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  finance_product?: InputMaybe<Finance_ProductFilterInput>;
  finance_product_id?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  finance_request_id?: InputMaybe<ComparableGuidOperationFilterInput>;
  finance_request_log?: InputMaybe<ListFilterInputTypeOffinance_Request_LogFilterInput>;
  finance_request_status?: InputMaybe<Finance_Request_StatusFilterInput>;
  finance_request_status_id?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  mobile?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<Finance_RequestFilterInput>>;
  referenceNo?: InputMaybe<StringOperationFilterInput>;
  term?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Finance_RequestInput = {
  amountRequired?: InputMaybe<Scalars['Decimal']>;
  dateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  email?: InputMaybe<Scalars['String']>;
  finance_product?: InputMaybe<Finance_ProductInput>;
  finance_product_id?: InputMaybe<Scalars['UUID']>;
  finance_request_id: Scalars['UUID'];
  finance_request_log: Array<Finance_Request_LogInput>;
  finance_request_status?: InputMaybe<Finance_Request_StatusInput>;
  finance_request_status_id?: InputMaybe<Scalars['UUID']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  referenceNo?: InputMaybe<Scalars['String']>;
  term?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Finance_RequestSortInput = {
  amountRequired?: InputMaybe<SortEnumType>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  finance_product?: InputMaybe<Finance_ProductSortInput>;
  finance_product_id?: InputMaybe<SortEnumType>;
  finance_request_id?: InputMaybe<SortEnumType>;
  finance_request_status?: InputMaybe<Finance_Request_StatusSortInput>;
  finance_request_status_id?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  mobile?: InputMaybe<SortEnumType>;
  referenceNo?: InputMaybe<SortEnumType>;
  term?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type Finance_Request_Log = {
  __typename?: 'finance_request_log';
  _case?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Instant']>;
  description?: Maybe<Scalars['String']>;
  finance_request?: Maybe<Finance_Request>;
  finance_request_id?: Maybe<Scalars['UUID']>;
  finance_request_log_id: Scalars['UUID'];
  title?: Maybe<Scalars['String']>;
};

export type Finance_Request_LogCollectionSegment = {
  __typename?: 'finance_request_logCollectionSegment';
  items?: Maybe<Array<Finance_Request_Log>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type Finance_Request_LogFilterInput = {
  _case?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  and?: InputMaybe<Array<Finance_Request_LogFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  date_created?: InputMaybe<ComparableNullableOfInstantOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  finance_request?: InputMaybe<Finance_RequestFilterInput>;
  finance_request_id?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  finance_request_log_id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<Finance_Request_LogFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Finance_Request_LogInput = {
  _case?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Instant']>;
  description?: InputMaybe<Scalars['String']>;
  finance_request?: InputMaybe<Finance_RequestInput>;
  finance_request_id?: InputMaybe<Scalars['UUID']>;
  finance_request_log_id: Scalars['UUID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Finance_Request_LogSortInput = {
  _case?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  date_created?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  finance_request?: InputMaybe<Finance_RequestSortInput>;
  finance_request_id?: InputMaybe<SortEnumType>;
  finance_request_log_id?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type Finance_Request_Status = {
  __typename?: 'finance_request_status';
  _case?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  finance_request: Array<Finance_Request>;
  finance_request_status_id: Scalars['UUID'];
  title?: Maybe<Scalars['String']>;
};

export type Finance_Request_StatusCollectionSegment = {
  __typename?: 'finance_request_statusCollectionSegment';
  items?: Maybe<Array<Finance_Request_Status>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type Finance_Request_StatusFilterInput = {
  _case?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  and?: InputMaybe<Array<Finance_Request_StatusFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  finance_request?: InputMaybe<ListFilterInputTypeOffinance_RequestFilterInput>;
  finance_request_status_id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<Finance_Request_StatusFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Finance_Request_StatusInput = {
  _case?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  finance_request: Array<Finance_RequestInput>;
  finance_request_status_id: Scalars['UUID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Finance_Request_StatusSortInput = {
  _case?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  finance_request_status_id?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};
