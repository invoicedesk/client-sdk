import type { CreateProductPayload } from '../models/CreateProductPayload';
import type { CreateProductResponse } from '../models/CreateProductResponse';
import type { DeleteProductPayload } from '../models/DeleteProductPayload';
import type { DeleteProductResponse } from '../models/DeleteProductResponse';
import type { ListProductsResponse } from '../models/ListProductsResponse';
import type { UpdateProductPayload } from '../models/UpdateProductPayload';
import type { UpdateProductResponse } from '../models/UpdateProductResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ProductAPI {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * List products
     * Get all products for a company
     * @returns ListProductsResponse
     * @throws ApiError
     */
    listProducts({ accountId, companyId, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to list products
         */
        companyId: string;
    }): CancelablePromise<ListProductsResponse>;
    /**
     * Add product
     * Add a new product to a company
     * @returns CreateProductResponse
     * @throws ApiError
     */
    createProduct({ accountId, companyId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to create a product
         */
        companyId: string;
        requestBody: CreateProductPayload;
    }): CancelablePromise<CreateProductResponse>;
    /**
     * Update a product
     * Update an existing product for a company
     * @returns UpdateProductResponse
     * @throws ApiError
     */
    updateProduct({ accountId, companyId, productId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to create a product
         */
        companyId: string;
        /**
         * Product ID to update
         */
        productId: string;
        requestBody: UpdateProductPayload;
    }): CancelablePromise<UpdateProductResponse>;
    /**
     * Remove a product
     * Remove a product from a company.
     * @returns DeleteProductResponse
     * @throws ApiError
     */
    deleteProduct({ accountId, companyId, productId, requestBody, }: {
        /**
         * Account ID to which the company belongs
         */
        accountId: string;
        /**
         * Company ID for which to create a product
         */
        companyId: string;
        /**
         * Product ID to delete
         */
        productId: string;
        requestBody: DeleteProductPayload;
    }): CancelablePromise<DeleteProductResponse>;
}
//# sourceMappingURL=ProductAPI.d.ts.map