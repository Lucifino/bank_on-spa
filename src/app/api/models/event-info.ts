/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { EventAttributes } from './event-attributes';
import { MemberTypes } from './member-types';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { Type } from './type';
export interface EventInfo {
  AddMethod?: MethodInfo;
  Attributes?: EventAttributes;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DeclaringType?: Type;
  EventHandlerType?: Type;
  IsCollectible?: boolean;
  IsMulticast?: boolean;
  IsSpecialName?: boolean;
  MemberType?: MemberTypes;
  MetadataToken?: number;
  Module?: Module;
  Name?: null | string;
  RaiseMethod?: MethodInfo;
  ReflectedType?: Type;
  RemoveMethod?: MethodInfo;
}
