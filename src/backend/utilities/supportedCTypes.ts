import type { ICType } from '@kiltprotocol/sdk-js';

import { personalCType } from '../cTypes/personalCType';

import { twitterCType } from '../cTypes/twitterCType';
import { companyCtype } from '../cTypes/companyCType';
import { driverCType } from '../cTypes/driverCType';


export const supportedCTypeKeys = ['personal', 'twitter', 'company', 'driver'] as const;

export type SupportedCType = (typeof supportedCTypeKeys)[number];

export const supportedCTypes: Record<SupportedCType, ICType> = {
  personal: personalCType,
  twitter: twitterCType,
  company: companyCtype,
  driver: driverCType,
};

export const kiltCost: Record<SupportedCType, number> = {
  personal: 5,
  twitter: 3,
  company: 1,
  driver: 2,
};

export function isSupportedCType(cType: string): cType is SupportedCType {
  return supportedCTypeKeys.includes(cType as SupportedCType);
}
