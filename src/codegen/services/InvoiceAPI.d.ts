import type { CreateInvoicePayload } from '../models/CreateInvoicePayload';
import type { CreateInvoiceResponse } from '../models/CreateInvoiceResponse';
import type { ListInvoiceResponse } from '../models/ListInvoiceResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class InvoiceAPI {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * List invoices
     * Get all invoices created for a company
     * @returns ListInvoiceResponse
     * @throws ApiError
     */
    listInvoices({ accountId, companyId, prefixes, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to list invoices
         */
        companyId: string;
        /**
         * Comma delimited query string that filters invoices by prefix.
         */
        prefixes?: string;
    }): CancelablePromise<ListInvoiceResponse>;
    /**
     * Create invoice
     * Raise an invoice for a company
     * @returns CreateInvoiceResponse
     * @throws ApiError
     */
    createInvoice({ accountId, companyId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to create an invoice
         */
        companyId: string;
        requestBody: CreateInvoicePayload;
    }): CancelablePromise<CreateInvoiceResponse>;
    /**
     * Delete a specific invoice
     * Deletes an invoice by ID
     * @returns SuccessResponse
     * @throws ApiError
     */
    deleteInvoice({ accountId, companyId, invoiceId, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to create an invoice
         */
        companyId: string;
        /**
         * ID of the invoice to be deleted
         */
        invoiceId: string;
    }): CancelablePromise<SuccessResponse>;
    /**
     * @returns any
     * @throws ApiError
     */
    invoiceControllerExport({ accountId, companyId, invoiceId, format, }: {
        accountId: string;
        companyId: string;
        invoiceId: string;
        format: string;
    }): CancelablePromise<any>;
}
//# sourceMappingURL=InvoiceAPI.d.ts.map