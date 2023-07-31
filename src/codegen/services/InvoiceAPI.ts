/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvoicePayload } from '../models/CreateInvoicePayload';
import type { CreateInvoiceResponse } from '../models/CreateInvoiceResponse';
import type { ListInvoiceResponse } from '../models/ListInvoiceResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InvoiceAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List invoices
   * Get all invoices created for a company
   * @returns ListInvoiceResponse
   * @throws ApiError
   */
  public listInvoices({
    accountId,
    companyId,
    prefixes,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to list invoices
     */
    companyId: string,
    /**
     * Comma delimited query string that filters invoices by prefix.
     */
    prefixes?: string,
  }): CancelablePromise<ListInvoiceResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/companies/{companyId}/invoices',
      path: {
        'accountId': accountId,
        'companyId': companyId,
      },
      query: {
        'prefixes': prefixes,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Create invoice
   * Raise an invoice for a company
   * @returns CreateInvoiceResponse
   * @throws ApiError
   */
  public createInvoice({
    accountId,
    companyId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to create an invoice
     */
    companyId: string,
    requestBody: CreateInvoicePayload,
  }): CancelablePromise<CreateInvoiceResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/accounts/{accountId}/companies/{companyId}/invoices',
      path: {
        'accountId': accountId,
        'companyId': companyId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Delete a specific invoice
   * Deletes an invoice by ID
   * @returns SuccessResponse
   * @throws ApiError
   */
  public deleteInvoice({
    accountId,
    companyId,
    invoiceId,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to create an invoice
     */
    companyId: string,
    /**
     * ID of the invoice to be deleted
     */
    invoiceId: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/accounts/{accountId}/companies/{companyId}/invoices/{invoiceId}',
      path: {
        'accountId': accountId,
        'companyId': companyId,
        'invoiceId': invoiceId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public invoiceControllerExport({
    accountId,
    companyId,
    invoiceId,
    format,
  }: {
    accountId: string,
    companyId: string,
    invoiceId: string,
    format: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/companies/{companyId}/invoices/{invoiceId}/export',
      path: {
        'accountId': accountId,
        'companyId': companyId,
        'invoiceId': invoiceId,
      },
      query: {
        'format': format,
      },
    });
  }

}
