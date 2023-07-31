/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { APIError } from './APIError';
import type { Client } from './Client';

export type ListClientsResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of clients
   */
  data: Array<Client>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<APIError>;
};

