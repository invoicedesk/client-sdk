import type { APIError } from './APIError';
import type { Client } from './Client';
export type DeleteClientResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The deleted client
     */
    data: Client;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=DeleteClientResponse.d.ts.map