/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { Module } from './module';
import { Type } from './type';
export interface MemberInfo {
  CustomAttributes?: null | Array<CustomAttributeData>;
  DeclaringType?: Type;
  IsCollectible?: boolean;
  MemberType?: MemberTypes;
  MetadataToken?: number;
  Module?: Module;
  Name?: null | string;
  ReflectedType?: Type;
}
