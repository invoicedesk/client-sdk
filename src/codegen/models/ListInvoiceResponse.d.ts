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
//# sourceMappingURL=ListInvoiceResponse.d.ts.map