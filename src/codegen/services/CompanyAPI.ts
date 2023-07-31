/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCompanyData } from '../models/CreateCompanyData';
import type { CreateCompanyResponse } from '../models/CreateCompanyResponse';
import type { GetCompanyResponse } from '../models/GetCompanyResponse';
import type { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateCompanyPayload } from '../models/UpdateCompanyPayload';
import type { UpdateTaxRegistrationResponse } from '../models/UpdateTaxRegistrationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List companies
   * List all companies that belong to an account.
   * @returns ListCompaniesResponse
   * @throws ApiError
   */
  public listCompanies({
    accountId,
  }: {
    /**
     * Account ID for which to list companies
     */
    accountId: string,
  }): CancelablePromise<ListCompaniesResponse> {
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
  public createCompany({
    accountId,
    requestBody,
  }: {
    /**
     * Account ID for which to create a company
     */
    accountId: string,
    requestBody: CreateCompanyData,
  }): CancelablePromise<CreateCompanyResponse> {
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
  public updateTaxRegistration({
    accountId,
    companyId,
    requestBody,
  }: {
    /**
     * Account ID for which to create a company
     */
    accountId: string,
    /**
     * Company ID for for which the tax registrations has to be added
     */
    companyId: string,
    requestBody: UpdateCompanyPayload,
  }): CancelablePromise<UpdateTaxRegistrationResponse> {
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
  public getCompany({
    accountId,
    companyId,
  }: {
    /**
     * ID of the account in which the company belongs
     */
    accountId: string,
    /**
     * ID of the company to fetch
     */
    companyId: string,
  }): CancelablePromise<GetCompanyResponse> {
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
  public deleteCompany({
    accountId,
    companyId,
  }: {
    /**
     * ID of the account in which the company belongs
     */
    accountId: string,
    /**
     * ID of the company
     */
    companyId: string,
  }): CancelablePromise<SuccessResponse> {
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
  public updateLogo({
    accountId,
    companyId,
  }: {
    /**
     * ID of the account in which the company belongs
     */
    accountId: string,
    /**
     * ID of the company
     */
    companyId: string,
  }): CancelablePromise<SuccessResponse> {
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
