import { gql } from 'apollo-angular';
export type Maybe<T> = T | null | undefined;
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
  BeforeResolver = 'BEFORE_RESOLVER',
  AfterResolver = 'AFTER_RESOLVER'
}

export type BooleanOperationFilterInput = {
  eq?: Maybe<Scalars['Boolean']>;
  neq?: Maybe<Scalars['Boolean']>;
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
  eq?: Maybe<Scalars['UUID']>;
  neq?: Maybe<Scalars['UUID']>;
  in?: Maybe<Array<Scalars['UUID']>>;
  nin?: Maybe<Array<Scalars['UUID']>>;
  gt?: Maybe<Scalars['UUID']>;
  ngt?: Maybe<Scalars['UUID']>;
  gte?: Maybe<Scalars['UUID']>;
  ngte?: Maybe<Scalars['UUID']>;
  lt?: Maybe<Scalars['UUID']>;
  nlt?: Maybe<Scalars['UUID']>;
  lte?: Maybe<Scalars['UUID']>;
  nlte?: Maybe<Scalars['UUID']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: Maybe<Scalars['Decimal']>;
  neq?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  gt?: Maybe<Scalars['Decimal']>;
  ngt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  ngte?: Maybe<Scalars['Decimal']>;
  lt?: Maybe<Scalars['Decimal']>;
  nlt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  nlte?: Maybe<Scalars['Decimal']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: Maybe<Scalars['UUID']>;
  neq?: Maybe<Scalars['UUID']>;
  in?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  gt?: Maybe<Scalars['UUID']>;
  ngt?: Maybe<Scalars['UUID']>;
  gte?: Maybe<Scalars['UUID']>;
  ngte?: Maybe<Scalars['UUID']>;
  lt?: Maybe<Scalars['UUID']>;
  nlt?: Maybe<Scalars['UUID']>;
  lte?: Maybe<Scalars['UUID']>;
  nlte?: Maybe<Scalars['UUID']>;
};

export type ComparableNullableOfInstantOperationFilterInput = {
  eq?: Maybe<Scalars['Instant']>;
  neq?: Maybe<Scalars['Instant']>;
  in?: Maybe<Array<Maybe<Scalars['Instant']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Instant']>>>;
  gt?: Maybe<Scalars['Instant']>;
  ngt?: Maybe<Scalars['Instant']>;
  gte?: Maybe<Scalars['Instant']>;
  ngte?: Maybe<Scalars['Instant']>;
  lt?: Maybe<Scalars['Instant']>;
  nlt?: Maybe<Scalars['Instant']>;
  lte?: Maybe<Scalars['Instant']>;
  nlte?: Maybe<Scalars['Instant']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  gt?: Maybe<Scalars['Int']>;
  ngt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  ngte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  nlt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  nlte?: Maybe<Scalars['Int']>;
};

export type ComparableNullableOfLocalDateOperationFilterInput = {
  eq?: Maybe<Scalars['LocalDate']>;
  neq?: Maybe<Scalars['LocalDate']>;
  in?: Maybe<Array<Maybe<Scalars['LocalDate']>>>;
  nin?: Maybe<Array<Maybe<Scalars['LocalDate']>>>;
  gt?: Maybe<Scalars['LocalDate']>;
  ngt?: Maybe<Scalars['LocalDate']>;
  gte?: Maybe<Scalars['LocalDate']>;
  ngte?: Maybe<Scalars['LocalDate']>;
  lt?: Maybe<Scalars['LocalDate']>;
  nlt?: Maybe<Scalars['LocalDate']>;
  lte?: Maybe<Scalars['LocalDate']>;
  nlte?: Maybe<Scalars['LocalDate']>;
};


export type FinanceProduct = {
  __typename?: 'FinanceProduct';
  FinanceProductId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  InterestRate?: Maybe<Scalars['Decimal']>;
  TermMin?: Maybe<Scalars['Int']>;
  AmountMin?: Maybe<Scalars['Decimal']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  MonthsFree?: Maybe<Scalars['Int']>;
  FinanceRequest?: Maybe<Array<FinanceRequest>>;
};

export type FinanceProductCollectionSegment = {
  __typename?: 'FinanceProductCollectionSegment';
  items?: Maybe<Array<FinanceProduct>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceProductFilterInput = {
  and?: Maybe<Array<FinanceProductFilterInput>>;
  or?: Maybe<Array<FinanceProductFilterInput>>;
  FinanceProductId?: Maybe<ComparableGuidOperationFilterInput>;
  Title?: Maybe<StringOperationFilterInput>;
  Description?: Maybe<StringOperationFilterInput>;
  InterestRate?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  TermMin?: Maybe<ComparableNullableOfInt32OperationFilterInput>;
  AmountMin?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  _Deleted?: Maybe<BooleanOperationFilterInput>;
  MonthsFree?: Maybe<ComparableNullableOfInt32OperationFilterInput>;
  FinanceRequest?: Maybe<ListFilterInputTypeOfFinanceRequestFilterInput>;
};

export type FinanceProductInput = {
  FinanceProductId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  InterestRate?: Maybe<Scalars['Decimal']>;
  TermMin?: Maybe<Scalars['Int']>;
  AmountMin?: Maybe<Scalars['Decimal']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  MonthsFree?: Maybe<Scalars['Int']>;
  FinanceRequest?: Maybe<Array<FinanceRequestInput>>;
};

export type FinanceProductSortInput = {
  FinanceProductId?: Maybe<SortEnumType>;
  Title?: Maybe<SortEnumType>;
  Description?: Maybe<SortEnumType>;
  InterestRate?: Maybe<SortEnumType>;
  TermMin?: Maybe<SortEnumType>;
  AmountMin?: Maybe<SortEnumType>;
  _Deleted?: Maybe<SortEnumType>;
  MonthsFree?: Maybe<SortEnumType>;
};

export type FinanceRequest = {
  __typename?: 'FinanceRequest';
  FinanceRequestId: Scalars['UUID'];
  AmountRequired?: Maybe<Scalars['Decimal']>;
  Term?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  Mobile?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  ReferenceNo?: Maybe<Scalars['String']>;
  FinanceProductId?: Maybe<Scalars['UUID']>;
  FinanceRequestStatusId?: Maybe<Scalars['UUID']>;
  DateOfApplication?: Maybe<Scalars['LocalDate']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  MonthlyRepayment?: Maybe<Scalars['Decimal']>;
  TotalRepayment?: Maybe<Scalars['Decimal']>;
  FinanceProduct?: Maybe<FinanceProduct>;
  FinanceRequestStatus?: Maybe<FinanceRequestStatus>;
  FinanceRequestLog?: Maybe<Array<FinanceRequestLog>>;
};

export type FinanceRequestCollectionSegment = {
  __typename?: 'FinanceRequestCollectionSegment';
  items?: Maybe<Array<FinanceRequest>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestFilterInput = {
  and?: Maybe<Array<FinanceRequestFilterInput>>;
  or?: Maybe<Array<FinanceRequestFilterInput>>;
  FinanceRequestId?: Maybe<ComparableGuidOperationFilterInput>;
  AmountRequired?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  Term?: Maybe<ComparableNullableOfInt32OperationFilterInput>;
  Title?: Maybe<StringOperationFilterInput>;
  FirstName?: Maybe<StringOperationFilterInput>;
  LastName?: Maybe<StringOperationFilterInput>;
  DateOfBirth?: Maybe<ComparableNullableOfLocalDateOperationFilterInput>;
  Mobile?: Maybe<StringOperationFilterInput>;
  Email?: Maybe<StringOperationFilterInput>;
  ReferenceNo?: Maybe<StringOperationFilterInput>;
  FinanceProductId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  FinanceRequestStatusId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  DateOfApplication?: Maybe<ComparableNullableOfLocalDateOperationFilterInput>;
  _Deleted?: Maybe<BooleanOperationFilterInput>;
  MonthlyRepayment?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  TotalRepayment?: Maybe<ComparableNullableOfDecimalOperationFilterInput>;
  FinanceProduct?: Maybe<FinanceProductFilterInput>;
  FinanceRequestStatus?: Maybe<FinanceRequestStatusFilterInput>;
  FinanceRequestLog?: Maybe<ListFilterInputTypeOfFinanceRequestLogFilterInput>;
};

export type FinanceRequestInput = {
  FinanceRequestId: Scalars['UUID'];
  AmountRequired?: Maybe<Scalars['Decimal']>;
  Term?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  Mobile?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  ReferenceNo?: Maybe<Scalars['String']>;
  FinanceProductId?: Maybe<Scalars['UUID']>;
  FinanceRequestStatusId?: Maybe<Scalars['UUID']>;
  DateOfApplication?: Maybe<Scalars['LocalDate']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  MonthlyRepayment?: Maybe<Scalars['Decimal']>;
  TotalRepayment?: Maybe<Scalars['Decimal']>;
  FinanceProduct?: Maybe<FinanceProductInput>;
  FinanceRequestStatus?: Maybe<FinanceRequestStatusInput>;
  FinanceRequestLog?: Maybe<Array<FinanceRequestLogInput>>;
};

export type FinanceRequestLog = {
  __typename?: 'FinanceRequestLog';
  FinanceRequestLogId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  FinanceRequestId?: Maybe<Scalars['UUID']>;
  Content?: Maybe<Scalars['String']>;
  DateCreated?: Maybe<Scalars['Instant']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  FinanceRequest?: Maybe<FinanceRequest>;
};

export type FinanceRequestLogCollectionSegment = {
  __typename?: 'FinanceRequestLogCollectionSegment';
  items?: Maybe<Array<FinanceRequestLog>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestLogFilterInput = {
  and?: Maybe<Array<FinanceRequestLogFilterInput>>;
  or?: Maybe<Array<FinanceRequestLogFilterInput>>;
  FinanceRequestLogId?: Maybe<ComparableGuidOperationFilterInput>;
  Title?: Maybe<StringOperationFilterInput>;
  Description?: Maybe<StringOperationFilterInput>;
  FinanceRequestId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  Content?: Maybe<StringOperationFilterInput>;
  DateCreated?: Maybe<ComparableNullableOfInstantOperationFilterInput>;
  _Deleted?: Maybe<BooleanOperationFilterInput>;
  FinanceRequest?: Maybe<FinanceRequestFilterInput>;
};

export type FinanceRequestLogInput = {
  FinanceRequestLogId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  FinanceRequestId?: Maybe<Scalars['UUID']>;
  Content?: Maybe<Scalars['String']>;
  DateCreated?: Maybe<Scalars['Instant']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  FinanceRequest?: Maybe<FinanceRequestInput>;
};

export type FinanceRequestLogSortInput = {
  FinanceRequestLogId?: Maybe<SortEnumType>;
  Title?: Maybe<SortEnumType>;
  Description?: Maybe<SortEnumType>;
  FinanceRequestId?: Maybe<SortEnumType>;
  Content?: Maybe<SortEnumType>;
  DateCreated?: Maybe<SortEnumType>;
  _Deleted?: Maybe<SortEnumType>;
  FinanceRequest?: Maybe<FinanceRequestSortInput>;
};

export type FinanceRequestProxyInput = {
  AmountRequired?: Maybe<Scalars['Decimal']>;
  Term?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  FirstName?: Maybe<Scalars['String']>;
  LastName?: Maybe<Scalars['String']>;
  DateOfBirth?: Maybe<Scalars['LocalDate']>;
  Mobile?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
};

export type FinanceRequestSortInput = {
  FinanceRequestId?: Maybe<SortEnumType>;
  AmountRequired?: Maybe<SortEnumType>;
  Term?: Maybe<SortEnumType>;
  Title?: Maybe<SortEnumType>;
  FirstName?: Maybe<SortEnumType>;
  LastName?: Maybe<SortEnumType>;
  DateOfBirth?: Maybe<SortEnumType>;
  Mobile?: Maybe<SortEnumType>;
  Email?: Maybe<SortEnumType>;
  ReferenceNo?: Maybe<SortEnumType>;
  FinanceProductId?: Maybe<SortEnumType>;
  FinanceRequestStatusId?: Maybe<SortEnumType>;
  DateOfApplication?: Maybe<SortEnumType>;
  _Deleted?: Maybe<SortEnumType>;
  MonthlyRepayment?: Maybe<SortEnumType>;
  TotalRepayment?: Maybe<SortEnumType>;
  FinanceProduct?: Maybe<FinanceProductSortInput>;
  FinanceRequestStatus?: Maybe<FinanceRequestStatusSortInput>;
};

export type FinanceRequestStatus = {
  __typename?: 'FinanceRequestStatus';
  FinanceRequestStatusId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  _case?: Maybe<Scalars['Int']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  FinanceRequest?: Maybe<Array<FinanceRequest>>;
};

export type FinanceRequestStatusCollectionSegment = {
  __typename?: 'FinanceRequestStatusCollectionSegment';
  items?: Maybe<Array<FinanceRequestStatus>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type FinanceRequestStatusFilterInput = {
  and?: Maybe<Array<FinanceRequestStatusFilterInput>>;
  or?: Maybe<Array<FinanceRequestStatusFilterInput>>;
  FinanceRequestStatusId?: Maybe<ComparableGuidOperationFilterInput>;
  Title?: Maybe<StringOperationFilterInput>;
  Description?: Maybe<StringOperationFilterInput>;
  _case?: Maybe<ComparableNullableOfInt32OperationFilterInput>;
  _Deleted?: Maybe<BooleanOperationFilterInput>;
  FinanceRequest?: Maybe<ListFilterInputTypeOfFinanceRequestFilterInput>;
};

export type FinanceRequestStatusInput = {
  FinanceRequestStatusId: Scalars['UUID'];
  Title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  _case?: Maybe<Scalars['Int']>;
  _Deleted?: Maybe<Scalars['Boolean']>;
  FinanceRequest?: Maybe<Array<FinanceRequestInput>>;
};

export type FinanceRequestStatusSortInput = {
  FinanceRequestStatusId?: Maybe<SortEnumType>;
  Title?: Maybe<SortEnumType>;
  Description?: Maybe<SortEnumType>;
  _case?: Maybe<SortEnumType>;
  _Deleted?: Maybe<SortEnumType>;
};


export type ListFilterInputTypeOfFinanceRequestFilterInput = {
  all?: Maybe<FinanceRequestFilterInput>;
  none?: Maybe<FinanceRequestFilterInput>;
  some?: Maybe<FinanceRequestFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfFinanceRequestLogFilterInput = {
  all?: Maybe<FinanceRequestLogFilterInput>;
  none?: Maybe<FinanceRequestLogFilterInput>;
  some?: Maybe<FinanceRequestLogFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  AddFinanceRequest: Response;
  UpdateFinanceRequest: Response;
  ApplyFinanceRequest: Response;
  UpsertFinanceProducts: Response;
  UpsertFinanceRequestStatuses: Response;
};


export type MutationAddFinanceRequestArgs = {
  input: FinanceRequestProxyInput;
};


export type MutationUpdateFinanceRequestArgs = {
  edit: FinanceRequestInput;
};


export type MutationApplyFinanceRequestArgs = {
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
  FinanceRequestsPaginated?: Maybe<FinanceRequestCollectionSegment>;
  FinanceRequests: Array<FinanceRequest>;
  FinanceRequestStatusesPagnated?: Maybe<FinanceRequestStatusCollectionSegment>;
  FinanceRequestStatuses: Array<FinanceRequestStatus>;
  FinanceRequestLogsPaginated?: Maybe<FinanceRequestLogCollectionSegment>;
  FinanceRequestLogs: Array<FinanceRequestLog>;
  FinanceProductsPaginated?: Maybe<FinanceProductCollectionSegment>;
  FinanceProducts: Array<FinanceProduct>;
};


export type QueryFinanceRequestsPaginatedArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FinanceRequestFilterInput>;
  order?: Maybe<Array<FinanceRequestSortInput>>;
};


export type QueryFinanceRequestsArgs = {
  where?: Maybe<FinanceRequestFilterInput>;
  order?: Maybe<Array<FinanceRequestSortInput>>;
};


export type QueryFinanceRequestStatusesPagnatedArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FinanceRequestStatusFilterInput>;
  order?: Maybe<Array<FinanceRequestStatusSortInput>>;
};


export type QueryFinanceRequestStatusesArgs = {
  where?: Maybe<FinanceRequestStatusFilterInput>;
  order?: Maybe<Array<FinanceRequestStatusSortInput>>;
};


export type QueryFinanceRequestLogsPaginatedArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FinanceRequestLogFilterInput>;
  order?: Maybe<Array<FinanceRequestLogSortInput>>;
};


export type QueryFinanceRequestLogsArgs = {
  where?: Maybe<FinanceRequestLogFilterInput>;
  order?: Maybe<Array<FinanceRequestLogSortInput>>;
};


export type QueryFinanceProductsPaginatedArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FinanceProductFilterInput>;
  order?: Maybe<Array<FinanceProductSortInput>>;
};


export type QueryFinanceProductsArgs = {
  where?: Maybe<FinanceProductFilterInput>;
  order?: Maybe<Array<FinanceProductSortInput>>;
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
  and?: Maybe<Array<StringOperationFilterInput>>;
  or?: Maybe<Array<StringOperationFilterInput>>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  ncontains?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
  nstartsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  nendsWith?: Maybe<Scalars['String']>;
};


