/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateClientPayload = {
  /**
   * Name of the client is required
   */
  name: string;
  /**
   * Client is a company
   */
  isCompany?: boolean;
  /**
   * Address of the client
   */
  address?: string;
  /**
   * contact info of the client
   */
  contactInfo?: Array<string>;
  /**
   * Meta data of the client
   */
  metadata?: string;
};

