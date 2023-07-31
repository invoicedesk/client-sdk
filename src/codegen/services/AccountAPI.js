"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAPI = void 0;
class AccountAPI {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Create API token
     * Create an API access token with an expiry date
     * @returns CreateApiTokenResponse
     * @throws ApiError
     */
    createApiToken({ accountId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{accountId}/api-token',
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
}
exports.AccountAPI = AccountAPI;
