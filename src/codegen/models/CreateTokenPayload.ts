/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTokenPayload = {
  /**
   * Name of the api token
   */
  name: string;
  /**
   * Date when this token expires. This token will be automatically revoked beyond this date
   */
  expiresAt?: string;
  /**
   * Authorization permissions for the token
   */
  abilities?: string;
};

