/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInPayload } from '../models/SignInPayload';
import type { SignInResponse } from '../models/SignInResponse';
import type { SignUpPayload } from '../models/SignUpPayload';
import type { SignUpResponse } from '../models/SignUpResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthenticationAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a new account
   * Creates a new account and assigns an admin user
   * @returns SignUpResponse
   * @throws ApiError
   */
  public signUp({
    requestBody,
  }: {
    requestBody: SignUpPayload,
  }): CancelablePromise<SignUpResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/signup',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Sign in to invoice desk
   * Generates an API token that you may use to authenticate the application
   * @returns SignInResponse
   * @throws ApiError
   */
  public signIn({
    requestBody,
  }: {
    requestBody: SignInPayload,
  }): CancelablePromise<SignInResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/auth/signin',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
