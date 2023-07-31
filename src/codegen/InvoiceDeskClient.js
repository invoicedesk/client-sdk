"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceDeskClient = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const AccountAPI_1 = require("./services/AccountAPI");
const ClientAPI_1 = require("./services/ClientAPI");
const CompanyAPI_1 = require("./services/CompanyAPI");
const InvoiceAPI_1 = require("./services/InvoiceAPI");
const ProductAPI_1 = require("./services/ProductAPI");
class InvoiceDeskClient {
    constructor(config, HttpRequest = AxiosHttpRequest_1.AxiosHttpRequest) {
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : '',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '1.0',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
        });
        this.account = new AccountAPI_1.AccountAPI(this.request);
        this.client = new ClientAPI_1.ClientAPI(this.request);
        this.company = new CompanyAPI_1.CompanyAPI(this.request);
        this.invoice = new InvoiceAPI_1.InvoiceAPI(this.request);
        this.product = new ProductAPI_1.ProductAPI(this.request);
    }
}
exports.InvoiceDeskClient = InvoiceDeskClient;
