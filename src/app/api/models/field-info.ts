/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { FieldAttributes } from './field-attributes';
import { MemberTypes } from './member-types';
import { Module } from './module';
import { RuntimeFieldHandle } from './runtime-field-handle';
import { Type } from './type';
export interface FieldInfo {
  Attributes?: FieldAttributes;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DeclaringType?: Type;
  FieldHandle?: RuntimeFieldHandle;
  FieldType?: Type;
  IsAssembly?: boolean;
  IsCollectible?: boolean;
  IsFamily?: boolean;
  IsFamilyAndAssembly?: boolean;
  IsFamilyOrAssembly?: boolean;
  IsInitOnly?: boolean;
  IsLiteral?: boolean;
  IsNotSerialized?: boolean;
  IsPinvokeImpl?: boolean;
  IsPrivate?: boolean;
  IsPublic?: boolean;
  IsSecurityCritical?: boolean;
  IsSecuritySafeCritical?: boolean;
  IsSecurityTransparent?: boolean;
  IsSpecialName?: boolean;
  IsStatic?: boolean;
  MemberType?: MemberTypes;
  MetadataToken?: number;
  Module?: Module;
  Name?: null | string;
  ReflectedType?: Type;
}
