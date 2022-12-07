/* tslint:disable */
/* eslint-disable */
import { CallingConventions } from './calling-conventions';
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { MethodAttributes } from './method-attributes';
import { MethodImplAttributes } from './method-impl-attributes';
import { Module } from './module';
import { RuntimeMethodHandle } from './runtime-method-handle';
import { Type } from './type';
export interface ConstructorInfo {
  Attributes?: MethodAttributes;
  CallingConvention?: CallingConventions;
  ContainsGenericParameters?: boolean;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DeclaringType?: Type;
  IsAbstract?: boolean;
  IsAssembly?: boolean;
  IsCollectible?: boolean;
  IsConstructedGenericMethod?: boolean;
  IsConstructor?: boolean;
  IsFamily?: boolean;
  IsFamilyAndAssembly?: boolean;
  IsFamilyOrAssembly?: boolean;
  IsFinal?: boolean;
  IsGenericMethod?: boolean;
  IsGenericMethodDefinition?: boolean;
  IsHideBySig?: boolean;
  IsPrivate?: boolean;
  IsPublic?: boolean;
  IsSecurityCritical?: boolean;
  IsSecuritySafeCritical?: boolean;
  IsSecurityTransparent?: boolean;
  IsSpecialName?: boolean;
  IsStatic?: boolean;
  IsVirtual?: boolean;
  MemberType?: MemberTypes;
  MetadataToken?: number;
  MethodHandle?: RuntimeMethodHandle;
  MethodImplementationFlags?: MethodImplAttributes;
  Module?: Module;
  Name?: null | string;
  ReflectedType?: Type;
}
