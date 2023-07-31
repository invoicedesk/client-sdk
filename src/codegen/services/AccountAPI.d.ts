import type { CreateApiTokenResponse } from '../models/CreateApiTokenResponse';
import type { CreateTokenPayload } from '../models/CreateTokenPayload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AccountAPI {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create API token
     * Create an API access token with an expiry date
     * @returns CreateApiTokenResponse
     * @throws ApiError
     */
    createApiToken({ accountId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        requestBody: CreateTokenPayload;
    }): CancelablePromise<CreateApiTokenResponse>;
}
//# sourceMappingURL=AccountAPI.d.ts.map