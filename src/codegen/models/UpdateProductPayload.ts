/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateProductPayload = {
  /**
   * Name of the product is required
   */
  name: string;
  /**
   * description of the product
   */
  description?: string;
  /**
   * HSN of the product
   */
  hsn?: string;
  /**
   * Rate of the product
   */
  price?: number;
  /**
   * Unit of the product
   */
  units?: string;
  /**
   * Metadata of the product
   */
  metadata?: string;
};

