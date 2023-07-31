import type { APIError } from './APIError';
import type { Product } from './Product';
export type UpdateProductResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The updated product, after the change
     */
    data: Product;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=UpdateProductResponse.d.ts.map