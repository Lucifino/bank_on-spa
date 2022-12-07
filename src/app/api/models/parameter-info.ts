/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberInfo } from './member-info';
import { ParameterAttributes } from './parameter-attributes';
import { Type } from './type';
export interface ParameterInfo {
  Attributes?: ParameterAttributes;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DefaultValue?: null | any;
  HasDefaultValue?: boolean;
  IsIn?: boolean;
  IsLcid?: boolean;
  IsOptional?: boolean;
  IsOut?: boolean;
  IsRetval?: boolean;
  Member?: MemberInfo;
  MetadataToken?: number;
  Name?: null | string;
  ParameterType?: Type;
  Position?: number;
  RawDefaultValue?: null | any;
}
