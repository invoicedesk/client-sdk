/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyContactInfo } from './CompanyContactInfo';
import type { Invoice } from './Invoice';

export type Company = {
  /**
   * ID of the company
   */
  id: string;
  /**
   * Account ID to which the company belongs
   */
  accountId: string;
  /**
   * Name of the company
   */
  name: string;
  /**
   * Company tax registration information
   */
  taxRegistrations: Array<string>;
  /**
   * List of invoices generated for the company
   */
  invoices: Array<Invoice>;
  /**
   * URL of company logo
   */
  logoURL: string;
  /**
   * Registered postal address of the company
   */
  address: string;
  /**
   * City in which the company exists
   */
  city: string;
  /**
   * State in which the company exists
   */
  state: string;
  /**
   * Country in which the company exists
   */
  country: string;
  /**
   * Contact details of the company
   */
  contactInfo: Array<CompanyContactInfo>;
};

