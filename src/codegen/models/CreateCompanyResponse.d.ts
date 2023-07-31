import type { APIError } from './APIError';
import type { Company } from './Company';
export type CreateCompanyResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The newly created company
     */
    data: Company;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=CreateCompanyResponse.d.ts.map