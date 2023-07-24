/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UpdateProductPayload
 */
export interface UpdateProductPayload {
    /**
     * Name of the product is required
     * @type {string}
     * @memberof UpdateProductPayload
     */
    'name': string;
    /**
     * description of the product
     * @type {string}
     * @memberof UpdateProductPayload
     */
    'description'?: string;
    /**
     * HSN of the product
     * @type {string}
     * @memberof UpdateProductPayload
     */
    'hsn'?: string;
    /**
     * Rate of the product
     * @type {number}
     * @memberof UpdateProductPayload
     */
    'price'?: number;
    /**
     * Unit of the product
     * @type {string}
     * @memberof UpdateProductPayload
     */
    'units'?: string;
    /**
     * Metadata of the product
     * @type {string}
     * @memberof UpdateProductPayload
     */
    'metadata'?: string;
}

