/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LineItem } from './line-item';

/**
 * 
 * @export
 * @interface CreateInvoicePayload
 */
export interface CreateInvoicePayload {
    /**
     * Client against whom the invoice needs to be generated
     * @type {string}
     * @memberof CreateInvoicePayload
     */
    'clientId': string;
    /**
     * The date of the invoice
     * @type {string}
     * @memberof CreateInvoicePayload
     */
    'date': string;
    /**
     * Valid ISO 4217 currency code for the invoice
     * @type {string}
     * @memberof CreateInvoicePayload
     */
    'currency': string;
    /**
     * Custom prefix for this invoice. All invoices for a prefix series are guaranteed to have separate counters
     * @type {string}
     * @memberof CreateInvoicePayload
     */
    'prefix'?: string;
    /**
     * Any metadata attached to the invoice. Metadata is searchable
     * @type {object}
     * @memberof CreateInvoicePayload
     */
    'metadata'?: object;
    /**
     * The line items of the invoice
     * @type {Array<LineItem>}
     * @memberof CreateInvoicePayload
     */
    'lineItems'?: Array<LineItem>;
}

