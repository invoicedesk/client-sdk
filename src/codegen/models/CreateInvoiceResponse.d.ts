import type { APIError } from './APIError';
import type { Invoice } from './Invoice';
export type CreateInvoiceResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The created invoice
     */
    data: Invoice;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=CreateInvoiceResponse.d.ts.map