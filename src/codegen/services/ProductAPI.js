"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAPI = void 0;
class ProductAPI {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List products
     * Get all products for a company
     * @returns ListProductsResponse
     * @throws ApiError
     */
    listProducts({ accountId, companyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{accountId}/companies/{companyId}/products',
            path: {
                'accountId': accountId,
                'companyId': companyId,
            },
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Add product
     * Add a new product to a company
     * @returns CreateProductResponse
     * @throws ApiError
     */
    createProduct({ accountId, companyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{accountId}/companies/{companyId}/products',
            path: {
                'accountId': accountId,
                'companyId': companyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Update a product
     * Update an existing product for a company
     * @returns UpdateProductResponse
     * @throws ApiError
     */
    updateProduct({ accountId, companyId, productId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{accountId}/companies/{companyId}/products/{productId}',
            path: {
                'accountId': accountId,
                'companyId': companyId,
                'productId': productId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Unauthorized`,
                404: `Resource not found`,
            },
        });
    }
    /**
     * Remove a product
     * Remove a product from a company.
     * @returns DeleteProductResponse
     * @throws ApiError
     */
    deleteProduct({ accountId, companyId, productId, requestBody, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{accountId}/companies/{companyId}/products/{productId}',
            path: {
                'accountId': accountId,
                'companyId': companyId,
                'productId': productId,
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
exports.ProductAPI = ProductAPI;
