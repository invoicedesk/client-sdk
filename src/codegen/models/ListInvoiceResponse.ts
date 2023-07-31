/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { APIError } from './APIError';
import type { Invoice } from './Invoice';

export type ListInvoiceResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of invoices
   */
  data: Array<Invoice>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<APIError>;
};

