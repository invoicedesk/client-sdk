import type { CreateClientPayload } from '../models/CreateClientPayload';
import type { CreateClientResponse } from '../models/CreateClientResponse';
import type { DeleteClientResponse } from '../models/DeleteClientResponse';
import type { GetClientResponse } from '../models/GetClientResponse';
import type { ListClientsResponse } from '../models/ListClientsResponse';
import type { UpdateClientData } from '../models/UpdateClientData';
import type { UpdateClientResponse } from '../models/UpdateClientResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ClientAPI {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * List clients
     * Get all clients for a company.
     * @returns ListClientsResponse
     * @throws ApiError
     */
    listClients({ accountId, companyId, }: {
        /**
         * Account ID for which to list companies
         */
        accountId: string;
        /**
         * Company ID for which to list clients
         */
        companyId: string;
    }): CancelablePromise<ListClientsResponse>;
    /**
     * Add client
     * Add a new client to a company
     * @returns CreateClientResponse
     * @throws ApiError
     */
    createClient({ accountId, companyId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to add a client
         */
        companyId: string;
        requestBody: CreateClientPayload;
    }): CancelablePromise<CreateClientResponse>;
    /**
     * Update a client
     * Update an existing client for a company
     * @returns UpdateClientResponse
     * @throws ApiError
     */
    updateClient({ accountId, companyId, clientId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to update a client
         */
        companyId: string;
        /**
         * Client ID to update
         */
        clientId: string;
        requestBody: UpdateClientData;
    }): CancelablePromise<UpdateClientResponse>;
    /**
     * Remove client
     * Remove a client from a company.
     * @returns DeleteClientResponse
     * @throws ApiError
     */
    deleteClient({ accountId, companyId, clientId, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to update a client
         */
        companyId: string;
        /**
         * Client ID to update
         */
        clientId: string;
    }): CancelablePromise<DeleteClientResponse>;
    /**
     * Get client details
     * Get details about a specific client, optionally with associated data
     * @returns GetClientResponse
     * @throws ApiError
     */
    getClient({ include, limit, accountId, companyId, clientId, }: {
        /**
         * Related details of the client to include
         */
        include: string;
        /**
         * The max limit is 100 and it must be a positive number.
         */
        limit: number;
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to update a client
         */
        companyId: string;
        /**
         * Client ID to update
         */
        clientId: string;
    }): CancelablePromise<GetClientResponse>;
}
//# sourceMappingURL=ClientAPI.d.ts.map