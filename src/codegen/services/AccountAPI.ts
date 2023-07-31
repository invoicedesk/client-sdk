/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateApiTokenResponse } from '../models/CreateApiTokenResponse';
import type { CreateTokenPayload } from '../models/CreateTokenPayload';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create API token
   * Create an API access token with an expiry date
   * @returns CreateApiTokenResponse
   * @throws ApiError
   */
  public createApiToken({
    accountId,
    requestBody,
  }: {
    /**
     * Account ID to which the company belongs
     */
    accountId: string,
    requestBody: CreateTokenPayload,
  }): CancelablePromise<CreateApiTokenResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/accounts/{accountId}/api-token',
      path: {
        'accountId': accountId,
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
