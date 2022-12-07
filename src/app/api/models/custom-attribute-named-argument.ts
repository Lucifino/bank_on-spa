/* tslint:disable */
/* eslint-disable */
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
import { MemberInfo } from './member-info';
export interface CustomAttributeNamedArgument {
  IsField?: boolean;
  MemberInfo?: MemberInfo;
  MemberName?: null | string;
  TypedValue?: CustomAttributeTypedArgument;
}
