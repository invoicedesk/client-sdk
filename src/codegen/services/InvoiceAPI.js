"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceAPI = void 0;
class InvoiceAPI {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List invoices
     * Get all invoices created for a company
     * @returns ListInvoiceResponse
     * @throws ApiError
     */
    listInvoices({ accountId, companyId, prefixes, }) {
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
    createInvoice({ accountId, companyId, requestBody, }) {
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
    deleteInvoice({ accountId, companyId, invoiceId, }) {
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
    invoiceControllerExport({ accountId, companyId, invoiceId, format, }) {
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
exports.InvoiceAPI = InvoiceAPI;
