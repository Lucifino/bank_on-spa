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

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

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

export type FinanceProduct = {
  __typename?: 'FinanceProduct';
  AmountMin?: Maybe<Scalars['Decimal']>;
  Description?: Maybe<Scalars['String']>;
  FinanceProductId: Scalars['UUID'];
  FinanceRequest?: Maybe<Array<FinanceRequest>>;
  InterestRate?: Maybe<Scalars['Decimal']>;
  MonthsFree?: Maybe<Scalars['Int']>;
  TermMin?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
};

export type FinanceProductCollectionSegment = {
  __typename?: 'FinanceProductCollectionSegment';
  items?: Maybe<Array<FinanceProduct>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceProductFilterInput = {
  AmountMin?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  Description?: InputMaybe<StringOperationFilterInput>;
  FinanceProductId?: InputMaybe<ComparableGuidOperationFilterInput>;
  FinanceRequest?: InputMaybe<ListFilterInputTypeOfFinanceRequestFilterInput>;
  InterestRate?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  MonthsFree?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  TermMin?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  Title?: InputMaybe<StringOperationFilterInput>;
  _Deleted?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<FinanceProductFilterInput>>;
  or?: InputMaybe<Array<FinanceProductFilterInput>>;
};

export type FinanceProductInput = {
  AmountMin?: InputMaybe<Scalars['Decimal']>;
  Description?: InputMaybe<Scalars['String']>;
  FinanceProductId: Scalars['UUID'];
  FinanceRequest?: InputMaybe<Array<FinanceRequestInput>>;
  InterestRate?: InputMaybe<Scalars['Decimal']>;
  MonthsFree?: InputMaybe<Scalars['Int']>;
  TermMin?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
  _Deleted?: InputMaybe<Scalars['Boolean']>;
};

export type FinanceProductSortInput = {
  AmountMin?: InputMaybe<SortEnumType>;
  Description?: InputMaybe<SortEnumType>;
  FinanceProductId?: InputMaybe<SortEnumType>;
  InterestRate?: InputMaybe<SortEnumType>;
  MonthsFree?: InputMaybe<SortEnumType>;
  TermMin?: InputMaybe<SortEnumType>;
  Title?: InputMaybe<SortEnumType>;
  _Deleted?: InputMaybe<SortEnumType>;
};

export type FinanceRequest = {
  __typename?: 'FinanceRequest';
  AmountRequired?: Maybe<Scalars['Decimal']>;
  DateOfApplication?: Maybe<Scalars['LocalDate']>;
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  Email?: Maybe<Scalars['String']>;
  FinanceProduct?: Maybe<FinanceProduct>;
  FinanceProductId?: Maybe<Scalars['UUID']>;
  FinanceRequestId: Scalars['UUID'];
  FinanceRequestLog?: Maybe<Array<FinanceRequestLog>>;
  FinanceRequestStatus?: Maybe<FinanceRequestStatus>;
  FinanceRequestStatusId?: Maybe<Scalars['UUID']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  Mobile?: Maybe<Scalars['String']>;
  MonthlyRepayment?: Maybe<Scalars['Decimal']>;
  ReferenceNo?: Maybe<Scalars['String']>;
  Term?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  TotalRepayment?: Maybe<Scalars['Decimal']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
};

export type FinanceRequestCollectionSegment = {
  __typename?: 'FinanceRequestCollectionSegment';
  items?: Maybe<Array<FinanceRequest>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestFilterInput = {
  AmountRequired?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  DateOfApplication?: InputMaybe<ComparableNullableOfLocalDateOperationFilterInput>;
  DateOfBirth?: InputMaybe<ComparableNullableOfLocalDateOperationFilterInput>;
  Email?: InputMaybe<StringOperationFilterInput>;
  FinanceProduct?: InputMaybe<FinanceProductFilterInput>;
  FinanceProductId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  FinanceRequestId?: InputMaybe<ComparableGuidOperationFilterInput>;
  FinanceRequestLog?: InputMaybe<ListFilterInputTypeOfFinanceRequestLogFilterInput>;
  FinanceRequestStatus?: InputMaybe<FinanceRequestStatusFilterInput>;
  FinanceRequestStatusId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  FirstName?: InputMaybe<StringOperationFilterInput>;
  LastName?: InputMaybe<StringOperationFilterInput>;
  Mobile?: InputMaybe<StringOperationFilterInput>;
  MonthlyRepayment?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  ReferenceNo?: InputMaybe<StringOperationFilterInput>;
  Term?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  Title?: InputMaybe<StringOperationFilterInput>;
  TotalRepayment?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  _Deleted?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<FinanceRequestFilterInput>>;
  or?: InputMaybe<Array<FinanceRequestFilterInput>>;
};

export type FinanceRequestInput = {
  AmountRequired?: InputMaybe<Scalars['Decimal']>;
  DateOfApplication?: InputMaybe<Scalars['LocalDate']>;
  DateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  Email?: InputMaybe<Scalars['String']>;
  FinanceProduct?: InputMaybe<FinanceProductInput>;
  FinanceProductId?: InputMaybe<Scalars['UUID']>;
  FinanceRequestId: Scalars['UUID'];
  FinanceRequestLog?: InputMaybe<Array<FinanceRequestLogInput>>;
  FinanceRequestStatus?: InputMaybe<FinanceRequestStatusInput>;
  FinanceRequestStatusId?: InputMaybe<Scalars['UUID']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Mobile?: InputMaybe<Scalars['String']>;
  MonthlyRepayment?: InputMaybe<Scalars['Decimal']>;
  ReferenceNo?: InputMaybe<Scalars['String']>;
  Term?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
  TotalRepayment?: InputMaybe<Scalars['Decimal']>;
  _Deleted?: InputMaybe<Scalars['Boolean']>;
};

export type FinanceRequestLog = {
  __typename?: 'FinanceRequestLog';
  Content?: Maybe<Scalars['String']>;
  DateCreated?: Maybe<Scalars['Instant']>;
  Description?: Maybe<Scalars['String']>;
  FinanceRequest?: Maybe<FinanceRequest>;
  FinanceRequestId?: Maybe<Scalars['UUID']>;
  FinanceRequestLogId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
};

export type FinanceRequestLogCollectionSegment = {
  __typename?: 'FinanceRequestLogCollectionSegment';
  items?: Maybe<Array<FinanceRequestLog>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestLogFilterInput = {
  Content?: InputMaybe<StringOperationFilterInput>;
  DateCreated?: InputMaybe<ComparableNullableOfInstantOperationFilterInput>;
  Description?: InputMaybe<StringOperationFilterInput>;
  FinanceRequest?: InputMaybe<FinanceRequestFilterInput>;
  FinanceRequestId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  FinanceRequestLogId?: InputMaybe<ComparableGuidOperationFilterInput>;
  Title?: InputMaybe<StringOperationFilterInput>;
  _Deleted?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<FinanceRequestLogFilterInput>>;
  or?: InputMaybe<Array<FinanceRequestLogFilterInput>>;
};

export type FinanceRequestLogInput = {
  Content?: InputMaybe<Scalars['String']>;
  DateCreated?: InputMaybe<Scalars['Instant']>;
  Description?: InputMaybe<Scalars['String']>;
  FinanceRequest?: InputMaybe<FinanceRequestInput>;
  FinanceRequestId?: InputMaybe<Scalars['UUID']>;
  FinanceRequestLogId: Scalars['UUID'];
  Title?: InputMaybe<Scalars['String']>;
  _Deleted?: InputMaybe<Scalars['Boolean']>;
};

export type FinanceRequestLogSortInput = {
  Content?: InputMaybe<SortEnumType>;
  DateCreated?: InputMaybe<SortEnumType>;
  Description?: InputMaybe<SortEnumType>;
  FinanceRequest?: InputMaybe<FinanceRequestSortInput>;
  FinanceRequestId?: InputMaybe<SortEnumType>;
  FinanceRequestLogId?: InputMaybe<SortEnumType>;
  Title?: InputMaybe<SortEnumType>;
  _Deleted?: InputMaybe<SortEnumType>;
};

export type FinanceRequestProxyInput = {
  AmountRequired?: InputMaybe<Scalars['Decimal']>;
  DateOfBirth?: InputMaybe<Scalars['LocalDate']>;
  Email?: InputMaybe<Scalars['String']>;
  FirstName?: InputMaybe<Scalars['String']>;
  LastName?: InputMaybe<Scalars['String']>;
  Mobile?: InputMaybe<Scalars['String']>;
  Term?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FinanceRequestSortInput = {
  AmountRequired?: InputMaybe<SortEnumType>;
  DateOfApplication?: InputMaybe<SortEnumType>;
  DateOfBirth?: InputMaybe<SortEnumType>;
  Email?: InputMaybe<SortEnumType>;
  FinanceProduct?: InputMaybe<FinanceProductSortInput>;
  FinanceProductId?: InputMaybe<SortEnumType>;
  FinanceRequestId?: InputMaybe<SortEnumType>;
  FinanceRequestStatus?: InputMaybe<FinanceRequestStatusSortInput>;
  FinanceRequestStatusId?: InputMaybe<SortEnumType>;
  FirstName?: InputMaybe<SortEnumType>;
  LastName?: InputMaybe<SortEnumType>;
  Mobile?: InputMaybe<SortEnumType>;
  MonthlyRepayment?: InputMaybe<SortEnumType>;
  ReferenceNo?: InputMaybe<SortEnumType>;
  Term?: InputMaybe<SortEnumType>;
  Title?: InputMaybe<SortEnumType>;
  TotalRepayment?: InputMaybe<SortEnumType>;
  _Deleted?: InputMaybe<SortEnumType>;
};

export type FinanceRequestStatus = {
  __typename?: 'FinanceRequestStatus';
  Description?: Maybe<Scalars['String']>;
  FinanceRequest?: Maybe<Array<FinanceRequest>>;
  FinanceRequestStatusId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  _case?: Maybe<Scalars['Int']>;
};

export type FinanceRequestStatusCollectionSegment = {
  __typename?: 'FinanceRequestStatusCollectionSegment';
  items?: Maybe<Array<FinanceRequestStatus>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestStatusFilterInput = {
  Description?: InputMaybe<StringOperationFilterInput>;
  FinanceRequest?: InputMaybe<ListFilterInputTypeOfFinanceRequestFilterInput>;
  FinanceRequestStatusId?: InputMaybe<ComparableGuidOperationFilterInput>;
  Title?: InputMaybe<StringOperationFilterInput>;
  _Deleted?: InputMaybe<BooleanOperationFilterInput>;
  _case?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  and?: InputMaybe<Array<FinanceRequestStatusFilterInput>>;
  or?: InputMaybe<Array<FinanceRequestStatusFilterInput>>;
};

export type FinanceRequestStatusInput = {
  Description?: InputMaybe<Scalars['String']>;
  FinanceRequest?: InputMaybe<Array<FinanceRequestInput>>;
  FinanceRequestStatusId: Scalars['UUID'];
  Title?: InputMaybe<Scalars['String']>;
  _Deleted?: InputMaybe<Scalars['Boolean']>;
  _case?: InputMaybe<Scalars['Int']>;
};

export type FinanceRequestStatusSortInput = {
  Description?: InputMaybe<SortEnumType>;
  FinanceRequestStatusId?: InputMaybe<SortEnumType>;
  Title?: InputMaybe<SortEnumType>;
  _Deleted?: InputMaybe<SortEnumType>;
  _case?: InputMaybe<SortEnumType>;
};

export type ListFilterInputTypeOfFinanceRequestFilterInput = {
  all?: InputMaybe<FinanceRequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<FinanceRequestFilterInput>;
  some?: InputMaybe<FinanceRequestFilterInput>;
};

export type ListFilterInputTypeOfFinanceRequestLogFilterInput = {
  all?: InputMaybe<FinanceRequestLogFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<FinanceRequestLogFilterInput>;
  some?: InputMaybe<FinanceRequestLogFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddFinanceRequest: Response;
  ApplyFinanceRequest: Response;
  UpdateFinanceRequest: Response;
  UpsertFinanceProducts: Response;
  UpsertFinanceRequestStatuses: Response;
};


export type MutationAddFinanceRequestArgs = {
  input: FinanceRequestProxyInput;
};


export type MutationApplyFinanceRequestArgs = {
  edit: FinanceRequestInput;
};


export type MutationUpdateFinanceRequestArgs = {
  edit: FinanceRequestInput;
};


export type MutationUpsertFinanceProductsArgs = {
  input: Array<FinanceProductInput>;
};


export type MutationUpsertFinanceRequestStatusesArgs = {
  input: Array<FinanceRequestStatusInput>;
};

export type Query = {
  __typename?: 'Query';
  FinanceProducts: Array<FinanceProduct>;
  FinanceProductsPaginated?: Maybe<FinanceProductCollectionSegment>;
  FinanceRequestLogs: Array<FinanceRequestLog>;
  FinanceRequestLogsPaginated?: Maybe<FinanceRequestLogCollectionSegment>;
  FinanceRequestStatuses: Array<FinanceRequestStatus>;
  FinanceRequestStatusesPagnated?: Maybe<FinanceRequestStatusCollectionSegment>;
  FinanceRequests: Array<FinanceRequest>;
  FinanceRequestsPaginated?: Maybe<FinanceRequestCollectionSegment>;
};


export type QueryFinanceProductsArgs = {
  order?: InputMaybe<Array<FinanceProductSortInput>>;
  where?: InputMaybe<FinanceProductFilterInput>;
};


export type QueryFinanceProductsPaginatedArgs = {
  order?: InputMaybe<Array<FinanceProductSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceProductFilterInput>;
};


export type QueryFinanceRequestLogsArgs = {
  order?: InputMaybe<Array<FinanceRequestLogSortInput>>;
  where?: InputMaybe<FinanceRequestLogFilterInput>;
};


export type QueryFinanceRequestLogsPaginatedArgs = {
  order?: InputMaybe<Array<FinanceRequestLogSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceRequestLogFilterInput>;
};


export type QueryFinanceRequestStatusesArgs = {
  order?: InputMaybe<Array<FinanceRequestStatusSortInput>>;
  where?: InputMaybe<FinanceRequestStatusFilterInput>;
};


export type QueryFinanceRequestStatusesPagnatedArgs = {
  order?: InputMaybe<Array<FinanceRequestStatusSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceRequestStatusFilterInput>;
};


export type QueryFinanceRequestsArgs = {
  order?: InputMaybe<Array<FinanceRequestSortInput>>;
  where?: InputMaybe<FinanceRequestFilterInput>;
};


export type QueryFinanceRequestsPaginatedArgs = {
  order?: InputMaybe<Array<FinanceRequestSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceRequestFilterInput>;
};

export type Response = {
  __typename?: 'Response';
  ResponseCode: Scalars['Int'];
  ResponseLabel?: Maybe<Scalars['String']>;
  ResponseMessage?: Maybe<Scalars['String']>;
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
