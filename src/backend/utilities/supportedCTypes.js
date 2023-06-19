

import { personalCType } from '../cTypes/personalCType';

import { twitterCType } from '../cTypes/twitterCType';
import { companyCtype } from '../cTypes/companyCType';
import { driverCType } from '../cTypes/driverCType';


export const supportedCTypeKeys = ['personal', 'twitter', 'company', 'driver'];


export const supportedCTypes = {
  personal: personalCType,
  twitter: twitterCType,
  company: companyCtype,
  driver: driverCType,
};

export const kiltCost= {
  personal: 5,
  twitter: 3,
  company: 1,
  driver: 2,
};

export function isSupportedCType(cType) {
  return supportedCTypeKeys.includes(cType);
}
