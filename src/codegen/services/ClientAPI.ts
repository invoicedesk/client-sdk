/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateClientPayload } from '../models/CreateClientPayload';
import type { CreateClientResponse } from '../models/CreateClientResponse';
import type { DeleteClientResponse } from '../models/DeleteClientResponse';
import type { GetClientResponse } from '../models/GetClientResponse';
import type { ListClientsResponse } from '../models/ListClientsResponse';
import type { UpdateClientData } from '../models/UpdateClientData';
import type { UpdateClientResponse } from '../models/UpdateClientResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ClientAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List clients
   * Get all clients for a company.
   * @returns ListClientsResponse
   * @throws ApiError
   */
  public listClients({
    accountId,
    companyId,
  }: {
    /**
     * Account ID for which to list companies
     */
    accountId: string,
    /**
     * Company ID for which to list clients
     */
    companyId: string,
  }): CancelablePromise<ListClientsResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/companies/{companyId}/clients',
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
   * Add client
   * Add a new client to a company
   * @returns CreateClientResponse
   * @throws ApiError
   */
  public createClient({
    accountId,
    companyId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to add a client
     */
    companyId: string,
    requestBody: CreateClientPayload,
  }): CancelablePromise<CreateClientResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/accounts/{accountId}/companies/{companyId}/clients',
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
   * Update a client
   * Update an existing client for a company
   * @returns UpdateClientResponse
   * @throws ApiError
   */
  public updateClient({
    accountId,
    companyId,
    clientId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to update a client
     */
    companyId: string,
    /**
     * Client ID to update
     */
    clientId: string,
    requestBody: UpdateClientData,
  }): CancelablePromise<UpdateClientResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/accounts/{accountId}/companies/{companyId}/clients/{clientId}',
      path: {
        'accountId': accountId,
        'companyId': companyId,
        'clientId': clientId,
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
   * Remove client
   * Remove a client from a company.
   * @returns DeleteClientResponse
   * @throws ApiError
   */
  public deleteClient({
    accountId,
    companyId,
    clientId,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to update a client
     */
    companyId: string,
    /**
     * Client ID to update
     */
    clientId: string,
  }): CancelablePromise<DeleteClientResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/accounts/{accountId}/companies/{companyId}/clients/{clientId}',
      path: {
        'accountId': accountId,
        'companyId': companyId,
        'clientId': clientId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Get client details
   * Get details about a specific client, optionally with associated data
   * @returns GetClientResponse
   * @throws ApiError
   */
  public getClient({
    include,
    limit,
    accountId,
    companyId,
    clientId,
  }: {
    /**
     * Related details of the client to include
     */
    include: string,
    /**
     * The max limit is 100 and it must be a positive number.
     */
    limit: number,
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to update a client
     */
    companyId: string,
    /**
     * Client ID to update
     */
    clientId: string,
  }): CancelablePromise<GetClientResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/companies/{companyId}/clients/{clientId}',
      path: {
        'accountId': accountId,
        'companyId': companyId,
        'clientId': clientId,
      },
      query: {
        'include': include,
        'limit': limit,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
