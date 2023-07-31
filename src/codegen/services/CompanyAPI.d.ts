import type { CreateCompanyData } from '../models/CreateCompanyData';
import type { CreateCompanyResponse } from '../models/CreateCompanyResponse';
import type { GetCompanyResponse } from '../models/GetCompanyResponse';
import type { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateCompanyPayload } from '../models/UpdateCompanyPayload';
import type { UpdateTaxRegistrationResponse } from '../models/UpdateTaxRegistrationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CompanyAPI {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * List companies
     * List all companies that belong to an account.
     * @returns ListCompaniesResponse
     * @throws ApiError
     */
    listCompanies({ accountId, }: {
        /**
         * Account ID for which to list companies
         */
        accountId: string;
    }): CancelablePromise<ListCompaniesResponse>;
    /**
     * Add Company
     * Add a new company to an existing account
     * @returns CreateCompanyResponse
     * @throws ApiError
     */
    createCompany({ accountId, requestBody, }: {
        /**
         * Account ID for which to create a company
         */
        accountId: string;
        requestBody: CreateCompanyData;
    }): CancelablePromise<CreateCompanyResponse>;
    /**
     * Update tax registration of the company
     * @returns UpdateTaxRegistrationResponse
     * @throws ApiError
     */
    updateTaxRegistration({ accountId, companyId, requestBody, }: {
        /**
         * Account ID for which to create a company
         */
        accountId: string;
        /**
         * Company ID for for which the tax registrations has to be added
         */
        companyId: string;
        requestBody: UpdateCompanyPayload;
    }): CancelablePromise<UpdateTaxRegistrationResponse>;
    /**
     * Fetch details of a company by ID
     * @returns GetCompanyResponse
     * @throws ApiError
     */
    getCompany({ accountId, companyId, }: {
        /**
         * ID of the account in which the company belongs
         */
        accountId: string;
        /**
         * ID of the company to fetch
         */
        companyId: string;
    }): CancelablePromise<GetCompanyResponse>;
    /**
     * Delete a comany
     * Deletes a company and all it's related data
     * @returns SuccessResponse
     * @throws ApiError
     */
    deleteCompany({ accountId, companyId, }: {
        /**
         * ID of the account in which the company belongs
         */
        accountId: string;
        /**
         * ID of the company
         */
        companyId: string;
    }): CancelablePromise<SuccessResponse>;
    /**
     * Update comany logo
     *
     * Upload image of your company's logo. This will be shown on invoices.
     * Only image/jpeg,image/png are supported with a max file size of 2MB
     *
     * @returns SuccessResponse
     * @throws ApiError
     */
    updateLogo({ accountId, companyId, }: {
        /**
         * ID of the account in which the company belongs
         */
        accountId: string;
        /**
         * ID of the company
         */
        companyId: string;
    }): CancelablePromise<SuccessResponse>;
}
//# sourceMappingURL=CompanyAPI.d.ts.map