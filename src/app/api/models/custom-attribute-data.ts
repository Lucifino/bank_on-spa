/* tslint:disable */
/* eslint-disable */
import { ConstructorInfo } from './constructor-info';
import { CustomAttributeNamedArgument } from './custom-attribute-named-argument';
import { CustomAttributeTypedArgument } from './custom-attribute-typed-argument';
import { Type } from './type';
export interface CustomAttributeData {
  AttributeType?: Type;
  Constructor?: ConstructorInfo;
  ConstructorArguments?: null | Array<CustomAttributeTypedArgument>;
  NamedArguments?: null | Array<CustomAttributeNamedArgument>;
}
