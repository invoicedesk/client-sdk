import type { APIError } from './APIError';
import type { Product } from './Product';
export type DeleteProductResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The deleted product
     */
    data: Product;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=DeleteProductResponse.d.ts.map