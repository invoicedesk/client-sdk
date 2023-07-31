import type { APIError } from './APIError';
import type { ApiToken } from './ApiToken';
export type CreateApiTokenResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The newly created api token
     */
    data: ApiToken;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=CreateApiTokenResponse.d.ts.map