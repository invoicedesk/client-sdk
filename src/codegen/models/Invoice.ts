/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceLineItem } from './InvoiceLineItem';

export type Invoice = {
  /**
   * ID of the created invoice
   */
  id: string;
  /**
   * ID of the company the invoice belongs to
   */
  companyId: string;
  /**
   * ID of the client the invoice is raised against
   */
  clientId: string;
  /**
   * Invoice number
   */
  number: number;
  /**
   * Prefix of the invoice series
   */
  prefix: string;
  /**
   * The financial year this invoice belongs to
   */
  financialYear: string;
  /**
   * Date of the invoice
   */
  date: string;
  /**
   * The current status of the invoice
   */
  status: string;
  /**
   * Currency of the invoice
   */
  currency: string;
  /**
   * Any metadata attached with this invoice
   */
  metadata: Record<string, any>;
  /**
   * Timestamp of invoice creation
   */
  createdAt: string;
  /**
   * Line items of this invoice
   */
  lineItems: Array<InvoiceLineItem>;
  /**
   * Client to whom the invoice is raised
   */
  client: Record<string, any>;
  /**
   * The company from which this invoice was raised
   */
  company: Record<string, any>;
};

