/* tslint:disable */
/* eslint-disable */
import { CustomAttributeData } from './custom-attribute-data';
import { MethodInfo } from './method-info';
import { Module } from './module';
import { SecurityRuleSet } from './security-rule-set';
import { Type } from './type';
import { TypeInfo } from './type-info';
export interface Assembly {
  CodeBase?: null | string;
  CustomAttributes?: null | Array<CustomAttributeData>;
  DefinedTypes?: null | Array<TypeInfo>;
  EntryPoint?: MethodInfo;
  EscapedCodeBase?: null | string;
  ExportedTypes?: null | Array<Type>;
  FullName?: null | string;
  /** @deprecated */GlobalAssemblyCache?: boolean;
  HostContext?: number;
  ImageRuntimeVersion?: null | string;
  IsCollectible?: boolean;
  IsDynamic?: boolean;
  IsFullyTrusted?: boolean;
  Location?: null | string;
  ManifestModule?: Module;
  Modules?: null | Array<Module>;
  ReflectionOnly?: boolean;
  SecurityRuleSet?: SecurityRuleSet;
}
