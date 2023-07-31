"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAPI = exports.InvoiceAPI = exports.CompanyAPI = exports.ClientAPI = exports.AccountAPI = exports.InvoiceLineItem = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.BaseHttpRequest = exports.ApiError = exports.InvoiceDeskClient = void 0;
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var InvoiceDeskClient_1 = require("./InvoiceDeskClient");
Object.defineProperty(exports, "InvoiceDeskClient", { enumerable: true, get: function () { return InvoiceDeskClient_1.InvoiceDeskClient; } });
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var BaseHttpRequest_1 = require("./core/BaseHttpRequest");
Object.defineProperty(exports, "BaseHttpRequest", { enumerable: true, get: function () { return BaseHttpRequest_1.BaseHttpRequest; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var InvoiceLineItem_1 = require("./models/InvoiceLineItem");
Object.defineProperty(exports, "InvoiceLineItem", { enumerable: true, get: function () { return InvoiceLineItem_1.InvoiceLineItem; } });
var AccountAPI_1 = require("./services/AccountAPI");
Object.defineProperty(exports, "AccountAPI", { enumerable: true, get: function () { return AccountAPI_1.AccountAPI; } });
var ClientAPI_1 = require("./services/ClientAPI");
Object.defineProperty(exports, "ClientAPI", { enumerable: true, get: function () { return ClientAPI_1.ClientAPI; } });
var CompanyAPI_1 = require("./services/CompanyAPI");
Object.defineProperty(exports, "CompanyAPI", { enumerable: true, get: function () { return CompanyAPI_1.CompanyAPI; } });
var InvoiceAPI_1 = require("./services/InvoiceAPI");
Object.defineProperty(exports, "InvoiceAPI", { enumerable: true, get: function () { return InvoiceAPI_1.InvoiceAPI; } });
var ProductAPI_1 = require("./services/ProductAPI");
Object.defineProperty(exports, "ProductAPI", { enumerable: true, get: function () { return ProductAPI_1.ProductAPI; } });
