/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { APIError } from './APIError';

export type SignUpResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * The newly created api token
   */
  data: Account;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<APIError>;
};

