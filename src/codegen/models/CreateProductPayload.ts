/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateProductPayload = {
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
   * Price of the product
   */
  price: number;
  /**
   * Unit of the product
   */
  units?: string;
  /**
   * Metadata allows you to attach arbitrary bits of information to the product. This metadata is searchable. For example: {tags: ["clothing", "male"]}
   */
  metadata?: string;
};

