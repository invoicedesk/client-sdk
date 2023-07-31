import type { APIError } from './APIError';
import type { Company } from './Company';
export type ListCompaniesResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * List of companies
     */
    data: Array<Company>;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=ListCompaniesResponse.d.ts.map