/* tslint:disable */
/* eslint-disable */
import { Assembly } from './assembly';
import { CustomAttributeData } from './custom-attribute-data';
import { ModuleHandle } from './module-handle';
export interface Module {
  Assembly?: Assembly;
  CustomAttributes?: null | Array<CustomAttributeData>;
  FullyQualifiedName?: null | string;
  MDStreamVersion?: number;
  MetadataToken?: number;
  ModuleHandle?: ModuleHandle;
  ModuleVersionId?: string;
  Name?: null | string;
  ScopeName?: null | string;
}
