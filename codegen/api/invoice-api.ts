/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateInvoicePayload } from '../models';
// @ts-ignore
import { CreateInvoiceResponse } from '../models';
// @ts-ignore
import { ListInvoiceResponse } from '../models';
// @ts-ignore
import { SuccessResponse } from '../models';
/**
 * InvoiceApi - axios parameter creator
 * @export
 */
export const InvoiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Raise an invoice for a company
         * @summary Create invoice
         * @param {CreateInvoicePayload} createInvoicePayload 
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to create an invoice
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvoice: async (createInvoicePayload: CreateInvoicePayload, accountId: string, companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createInvoicePayload' is not null or undefined
            assertParamExists('createInvoice', 'createInvoicePayload', createInvoicePayload)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createInvoice', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('createInvoice', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/invoices`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createInvoicePayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an invoice by ID
         * @summary Delete a specific invoice
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to create an invoice
         * @param {string} invoiceId ID of the invoice to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInvoice: async (accountId: string, companyId: string, invoiceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('deleteInvoice', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteInvoice', 'companyId', companyId)
            // verify required parameter 'invoiceId' is not null or undefined
            assertParamExists('deleteInvoice', 'invoiceId', invoiceId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/invoices/{invoiceId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"invoiceId"}}`, encodeURIComponent(String(invoiceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} accountId 
         * @param {string} companyId 
         * @param {string} invoiceId 
         * @param {string} format 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceControllerExport: async (accountId: string, companyId: string, invoiceId: string, format: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('invoiceControllerExport', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('invoiceControllerExport', 'companyId', companyId)
            // verify required parameter 'invoiceId' is not null or undefined
            assertParamExists('invoiceControllerExport', 'invoiceId', invoiceId)
            // verify required parameter 'format' is not null or undefined
            assertParamExists('invoiceControllerExport', 'format', format)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/invoices/{invoiceId}/export`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)))
                .replace(`{${"invoiceId"}}`, encodeURIComponent(String(invoiceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all invoices created for a company
         * @summary List invoices
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to list invoices
         * @param {string} [prefixes] Comma delimited query string that filters invoices by prefix.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoices: async (accountId: string, companyId: string, prefixes?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('listInvoices', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('listInvoices', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/invoices`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (prefixes !== undefined) {
                localVarQueryParameter['prefixes'] = prefixes;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InvoiceApi - functional programming interface
 * @export
 */
export const InvoiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvoiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Raise an invoice for a company
         * @summary Create invoice
         * @param {CreateInvoicePayload} createInvoicePayload 
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to create an invoice
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInvoice(createInvoicePayload: CreateInvoicePayload, accountId: string, companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateInvoiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInvoice(createInvoicePayload, accountId, companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an invoice by ID
         * @summary Delete a specific invoice
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to create an invoice
         * @param {string} invoiceId ID of the invoice to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteInvoice(accountId: string, companyId: string, invoiceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteInvoice(accountId, companyId, invoiceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} accountId 
         * @param {string} companyId 
         * @param {string} invoiceId 
         * @param {string} format 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invoiceControllerExport(accountId: string, companyId: string, invoiceId: string, format: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.invoiceControllerExport(accountId, companyId, invoiceId, format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all invoices created for a company
         * @summary List invoices
         * @param {string} accountId Account ID to which the company belongs
         * @param {string} companyId Company ID for which to list invoices
         * @param {string} [prefixes] Comma delimited query string that filters invoices by prefix.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listInvoices(accountId: string, companyId: string, prefixes?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListInvoiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listInvoices(accountId, companyId, prefixes, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvoiceApi - factory interface
 * @export
 */
export const InvoiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvoiceApiFp(configuration)
    return {
        /**
         * Raise an invoice for a company
         * @summary Create invoice
         * @param {InvoiceApiCreateInvoiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInvoice(requestParameters: InvoiceApiCreateInvoiceRequest, options?: AxiosRequestConfig): AxiosPromise<CreateInvoiceResponse> {
            return localVarFp.createInvoice(requestParameters.createInvoicePayload, requestParameters.accountId, requestParameters.companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an invoice by ID
         * @summary Delete a specific invoice
         * @param {InvoiceApiDeleteInvoiceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteInvoice(requestParameters: InvoiceApiDeleteInvoiceRequest, options?: AxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.deleteInvoice(requestParameters.accountId, requestParameters.companyId, requestParameters.invoiceId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {InvoiceApiInvoiceControllerExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invoiceControllerExport(requestParameters: InvoiceApiInvoiceControllerExportRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.invoiceControllerExport(requestParameters.accountId, requestParameters.companyId, requestParameters.invoiceId, requestParameters.format, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all invoices created for a company
         * @summary List invoices
         * @param {InvoiceApiListInvoicesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listInvoices(requestParameters: InvoiceApiListInvoicesRequest, options?: AxiosRequestConfig): AxiosPromise<ListInvoiceResponse> {
            return localVarFp.listInvoices(requestParameters.accountId, requestParameters.companyId, requestParameters.prefixes, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInvoice operation in InvoiceApi.
 * @export
 * @interface InvoiceApiCreateInvoiceRequest
 */
export interface InvoiceApiCreateInvoiceRequest {
    /**
     * 
     * @type {CreateInvoicePayload}
     * @memberof InvoiceApiCreateInvoice
     */
    readonly createInvoicePayload: CreateInvoicePayload

    /**
     * Account ID to which the company belongs
     * @type {string}
     * @memberof InvoiceApiCreateInvoice
     */
    readonly accountId: string

    /**
     * Company ID for which to create an invoice
     * @type {string}
     * @memberof InvoiceApiCreateInvoice
     */
    readonly companyId: string
}

/**
 * Request parameters for deleteInvoice operation in InvoiceApi.
 * @export
 * @interface InvoiceApiDeleteInvoiceRequest
 */
export interface InvoiceApiDeleteInvoiceRequest {
    /**
     * Account ID to which the company belongs
     * @type {string}
     * @memberof InvoiceApiDeleteInvoice
     */
    readonly accountId: string

    /**
     * Company ID for which to create an invoice
     * @type {string}
     * @memberof InvoiceApiDeleteInvoice
     */
    readonly companyId: string

    /**
     * ID of the invoice to be deleted
     * @type {string}
     * @memberof InvoiceApiDeleteInvoice
     */
    readonly invoiceId: string
}

/**
 * Request parameters for invoiceControllerExport operation in InvoiceApi.
 * @export
 * @interface InvoiceApiInvoiceControllerExportRequest
 */
export interface InvoiceApiInvoiceControllerExportRequest {
    /**
     * 
     * @type {string}
     * @memberof InvoiceApiInvoiceControllerExport
     */
    readonly accountId: string

    /**
     * 
     * @type {string}
     * @memberof InvoiceApiInvoiceControllerExport
     */
    readonly companyId: string

    /**
     * 
     * @type {string}
     * @memberof InvoiceApiInvoiceControllerExport
     */
    readonly invoiceId: string

    /**
     * 
     * @type {string}
     * @memberof InvoiceApiInvoiceControllerExport
     */
    readonly format: string
}

/**
 * Request parameters for listInvoices operation in InvoiceApi.
 * @export
 * @interface InvoiceApiListInvoicesRequest
 */
export interface InvoiceApiListInvoicesRequest {
    /**
     * Account ID to which the company belongs
     * @type {string}
     * @memberof InvoiceApiListInvoices
     */
    readonly accountId: string

    /**
     * Company ID for which to list invoices
     * @type {string}
     * @memberof InvoiceApiListInvoices
     */
    readonly companyId: string

    /**
     * Comma delimited query string that filters invoices by prefix.
     * @type {string}
     * @memberof InvoiceApiListInvoices
     */
    readonly prefixes?: string
}

/**
 * InvoiceApi - object-oriented interface
 * @export
 * @class InvoiceApi
 * @extends {BaseAPI}
 */
export class InvoiceApi extends BaseAPI {
    /**
     * Raise an invoice for a company
     * @summary Create invoice
     * @param {InvoiceApiCreateInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    public createInvoice(requestParameters: InvoiceApiCreateInvoiceRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).createInvoice(requestParameters.createInvoicePayload, requestParameters.accountId, requestParameters.companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an invoice by ID
     * @summary Delete a specific invoice
     * @param {InvoiceApiDeleteInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    public deleteInvoice(requestParameters: InvoiceApiDeleteInvoiceRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).deleteInvoice(requestParameters.accountId, requestParameters.companyId, requestParameters.invoiceId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {InvoiceApiInvoiceControllerExportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    public invoiceControllerExport(requestParameters: InvoiceApiInvoiceControllerExportRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).invoiceControllerExport(requestParameters.accountId, requestParameters.companyId, requestParameters.invoiceId, requestParameters.format, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all invoices created for a company
     * @summary List invoices
     * @param {InvoiceApiListInvoicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvoiceApi
     */
    public listInvoices(requestParameters: InvoiceApiListInvoicesRequest, options?: AxiosRequestConfig) {
        return InvoiceApiFp(this.configuration).listInvoices(requestParameters.accountId, requestParameters.companyId, requestParameters.prefixes, options).then((request) => request(this.axios, this.basePath));
    }
}
