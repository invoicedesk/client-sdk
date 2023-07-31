import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AccountAPI } from './services/AccountAPI';
import { ClientAPI } from './services/ClientAPI';
import { CompanyAPI } from './services/CompanyAPI';
import { InvoiceAPI } from './services/InvoiceAPI';
import { ProductAPI } from './services/ProductAPI';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class InvoiceDeskClient {
    readonly account: AccountAPI;
    readonly client: ClientAPI;
    readonly company: CompanyAPI;
    readonly invoice: InvoiceAPI;
    readonly product: ProductAPI;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
//# sourceMappingURL=InvoiceDeskClient.d.ts.map