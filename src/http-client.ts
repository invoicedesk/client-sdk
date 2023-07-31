import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import { BaseHttpRequest, CancelablePromise, OpenAPIConfig } from "./codegen";
import { ApiRequestOptions } from "./codegen/core/ApiRequestOptions";
import { request as __request } from './codegen/core/request';

export class HttpClient extends BaseHttpRequest {
  private axios: AxiosInstance = axios.create();

  constructor(private openApiConfig: OpenAPIConfig) {
    super(openApiConfig);

    axiosRetry(this.axios, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay
    })
  }

  public request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return __request(this.openApiConfig, options, this.axios);
  }
}