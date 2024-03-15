/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccountAPI } from './services/AccountAPI';
import { AuthenticationAPI } from './services/AuthenticationAPI';
import { ClientAPI } from './services/ClientAPI';
import { CompanyAPI } from './services/CompanyAPI';
import { InvoiceAPI } from './services/InvoiceAPI';
import { ProductAPI } from './services/ProductAPI';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class InvoiceDeskClient {

  public readonly account: AccountAPI;
  public readonly authentication: AuthenticationAPI;
  public readonly client: ClientAPI;
  public readonly company: CompanyAPI;
  public readonly invoice: InvoiceAPI;
  public readonly product: ProductAPI;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.account = new AccountAPI(this.request);
    this.authentication = new AuthenticationAPI(this.request);
    this.client = new ClientAPI(this.request);
    this.company = new CompanyAPI(this.request);
    this.invoice = new InvoiceAPI(this.request);
    this.product = new ProductAPI(this.request);
  }
}

