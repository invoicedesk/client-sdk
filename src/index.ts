import { InvoiceDeskClient, OpenAPI } from "./codegen";
import { HttpClient } from "./http-client";

export type Config = {
  /** API host address.
   * 
   * @default https://api.invoicedesk.app
  */
  host?: string;

  /**
   * API version.
   * 
   * @default v1
   */
  version?: string;
};

export class InvoiceDesk {
  private client: InvoiceDeskClient;

  constructor({
    host = 'https://api.invoicedesk.app',
    version = 'v1',
  }: Config) {
    this.client = new InvoiceDeskClient({
      BASE: `${host}/${version}`,
    }, HttpClient);
  }

  get clients() {
    return this.client.client;
  }

  get companies() {
    return this.client.company
  }

  get products() {
    return this.client.product;
  }

  get invoices() {
    return this.client.invoice;
  }

  /**
   * Set the auth token to be used for all requests.
   *
   * @param {string} token
   * @throws {Error} if token is empty
   */
  setAuthToken(token: string) {
    if (token.trim() === '') {
      throw new Error('Token cannot be empty');
    }

    OpenAPI.TOKEN = token;
  }
}

export * from "./codegen/index";
