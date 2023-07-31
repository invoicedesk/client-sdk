/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItem = {
  /**
   * ID of the product or service being invoiced
   */
  id?: string;
  /**
   * Title of the item
   */
  title: string;
  /**
   * Short item description
   */
  description?: string;
  /**
   * Price of the line item. Must be indicated in lowest denomination of invoice currency.
   */
  price: number;
  /**
   * Quantity of the item being invoiced.
   */
  quantity: number;
  /**
   * Order in which the item will appear in the rendered invoice.
   * If not specified, the sort order will be inferred based on its position in
   * the array of line items
   */
  sortOrder?: number;
  /**
   * Any metadata attached to this line item.
   */
  metadata?: Record<string, any>;
};

