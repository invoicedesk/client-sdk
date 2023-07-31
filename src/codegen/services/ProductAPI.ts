/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductPayload } from '../models/CreateProductPayload';
import type { CreateProductResponse } from '../models/CreateProductResponse';
import type { DeleteProductPayload } from '../models/DeleteProductPayload';
import type { DeleteProductResponse } from '../models/DeleteProductResponse';
import type { ListProductsResponse } from '../models/ListProductsResponse';
import type { UpdateProductPayload } from '../models/UpdateProductPayload';
import type { UpdateProductResponse } from '../models/UpdateProductResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List products
   * Get all products for a company
   * @returns ListProductsResponse
   * @throws ApiError
   */
  public listProducts({
    accountId,
    companyId,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to list products
     */
    companyId: string,
  }): CancelablePromise<ListProductsResponse> {
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
  public createProduct({
    accountId,
    companyId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to create a product
     */
    companyId: string,
    requestBody: CreateProductPayload,
  }): CancelablePromise<CreateProductResponse> {
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
  public updateProduct({
    accountId,
    companyId,
    productId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to create a product
     */
    companyId: string,
    /**
     * Product ID to update
     */
    productId: string,
    requestBody: UpdateProductPayload,
  }): CancelablePromise<UpdateProductResponse> {
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
  public deleteProduct({
    accountId,
    companyId,
    productId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    /**
     * Company ID for which to create a product
     */
    companyId: string,
    /**
     * Product ID to delete
     */
    productId: string,
    requestBody: DeleteProductPayload,
  }): CancelablePromise<DeleteProductResponse> {
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
