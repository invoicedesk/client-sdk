import type { APIError } from './APIError';
import type { TaxRegistration } from './TaxRegistration';
export type UpdateTaxRegistrationResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * Updated tax registrations
     */
    data: Array<TaxRegistration>;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=UpdateTaxRegistrationResponse.d.ts.map