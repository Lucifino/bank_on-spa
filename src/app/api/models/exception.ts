/* tslint:disable */
/* eslint-disable */
import { MethodBase } from './method-base';
export interface Exception {
  Data?: null | {
[key: string]: any;
};
  HResult?: number;
  HelpLink?: null | string;
  InnerException?: Exception;
  Message?: null | string;
  Source?: null | string;
  StackTrace?: null | string;
  TargetSite?: MethodBase;
}
