import { ClientApi, CompanyApi, Configuration, InvoiceApi, ProductApi } from "../codegen";
type Config = {
  host: string;
  version?: string;
};

export class InvoiceDesk {
  private clientApi: ClientApi;
  private companyApi: CompanyApi;
  private productApi: ProductApi;
  private invoiceApi: InvoiceApi;
  private sdkConfig: Configuration;

  constructor(private config: Config) {
    this.sdkConfig = new Configuration({
      basePath: `${config.host}/${config.version || 'v1'}`
    });
  }

  get clients() {
    if (this.clientApi) {
      return this.clientApi;
    }
    
    this.clientApi = new ClientApi(this.sdkConfig);
    
    return this.clientApi;
  }

  get companies() {
    if(this.companyApi) {
      return this.companyApi;
    }

    this.companyApi = new CompanyApi(this.sdkConfig);
    return this.companyApi;
  }

  get products() {
    if(this.productApi) {
      return this.productApi;
    }

    this.productApi = new ProductApi(this.sdkConfig);
    return this.productApi;
  }

  get invoices() {
    if(this.invoiceApi) {
      return this.invoiceApi;
    }

    this.invoiceApi = new InvoiceApi(this.sdkConfig);
    return this.invoiceApi;
  }
}
