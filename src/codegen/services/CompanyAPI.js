"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAPI = void 0;
class CompanyAPI {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List companies
     * List all companies that belong to an account.
     * @returns ListCompaniesResponse
     * @throws ApiError
     */
    listCompanies({ accountId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{accountId}/companies',
            path: {
                'accountId': accountId,
            },
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add Company
     * Add a new company to an existing account
     * @returns CreateCompanyResponse
     * @throws ApiError
     */
    createCompany({ accountId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{accountId}/companies',
            path: {
                'accountId': accountId,
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
     * Update tax registration of the company
     * @returns UpdateTaxRegistrationResponse
     * @throws ApiError
     */
    updateTaxRegistration({ accountId, companyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{accountId}/companies/{companyId}/tax-registration',
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
     * Fetch details of a company by ID
     * @returns GetCompanyResponse
     * @throws ApiError
     */
    getCompany({ accountId, companyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{accountId}/companies/{companyId}',
            path: {
                'accountId': accountId,
                'companyId': companyId,
            },
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Delete a comany
     * Deletes a company and all it's related data
     * @returns SuccessResponse
     * @throws ApiError
     */
    deleteCompany({ accountId, companyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{accountId}/companies/{companyId}',
            path: {
                'accountId': accountId,
                'companyId': companyId,
            },
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update comany logo
     *
     * Upload image of your company's logo. This will be shown on invoices.
     * Only image/jpeg,image/png are supported with a max file size of 2MB
     *
     * @returns SuccessResponse
     * @throws ApiError
     */
    updateLogo({ accountId, companyId, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{accountId}/companies/{companyId}/logo',
            path: {
                'accountId': accountId,
                'companyId': companyId,
            },
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
}
exports.CompanyAPI = CompanyAPI;
