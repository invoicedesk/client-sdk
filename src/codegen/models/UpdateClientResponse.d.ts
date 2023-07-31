import type { APIError } from './APIError';
import type { Client } from './Client';
export type UpdateClientResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * Updated client details
     */
    data: Client;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=UpdateClientResponse.d.ts.map