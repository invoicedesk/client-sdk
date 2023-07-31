import type { APIError } from './APIError';
import type { Product } from './Product';
export type CreateProductResponse = {
    /**
     * Indicates whether the operation was successful or not
     */
    success: boolean;
    /**
     * The newly created product
     */
    data: Product;
    /**
     * If the operation was not successful, holds the deatils of errors
     */
    errors: Array<APIError>;
};
//# sourceMappingURL=CreateProductResponse.d.ts.map