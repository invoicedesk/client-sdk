"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAPI = void 0;
class ClientAPI {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List clients
     * Get all clients for a company.
     * @returns ListClientsResponse
     * @throws ApiError
     */
    listClients({ accountId, companyId, }) {
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
    createClient({ accountId, companyId, requestBody, }) {
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
    updateClient({ accountId, companyId, clientId, requestBody, }) {
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
    deleteClient({ accountId, companyId, clientId, }) {
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
    getClient({ include, limit, accountId, companyId, clientId, }) {
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
exports.ClientAPI = ClientAPI;
