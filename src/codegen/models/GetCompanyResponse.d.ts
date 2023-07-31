import type { APIError } from './APIError';
import type { Company } from './Company';
export type GetCompanyResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * Details of the requested company
     */
    data: Company;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=GetCompanyResponse.d.ts.map