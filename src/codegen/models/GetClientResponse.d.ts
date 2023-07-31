import type { APIError } from './APIError';
import type { Client } from './Client';
export type GetClientResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The client details
     */
    data: Client;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=GetClientResponse.d.ts.map