/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { PropertyAttributes } from './property-attributes';
import { Type } from './type';
export interface PropertyInfo {
  Attributes?: PropertyAttributes;
  CanRead?: boolean;
  CanWrite?: boolean;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DeclaringType?: Type;
  GetMethod?: MethodInfo;
  IsCollectible?: boolean;
  IsSpecialName?: boolean;
  MemberType?: MemberTypes;
  MetadataToken?: number;
  Module?: Module;
  Name?: null | string;
  PropertyType?: Type;
  ReflectedType?: Type;
  SetMethod?: MethodInfo;
}
