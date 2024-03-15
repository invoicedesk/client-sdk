# Official SDK for Invoice Desk API

This is the official SDK for the Invoice Desk API. If you would like to learn more about Inovice Desk,
please visit https://invoicedesk.app.

This SDK is available on NPM at https://npmjs.com/@invoicedesk/client

This SDK allows you to easily interact with invoice desk's APIs. It fully typed requests, responses and entity objects so you don't have to refer to the documentation to get things rights.

## Installation
#### npm

```sh
$ npm install @invoicedesk/client
```

#### yarn

```sh
$ yarn add @invoicedesk/client
```

#### pnpm

```sh
$ pnpm add @invoicedesk/client
```

## Usage

All invocations requires a JWT token to authenticate requests with the server.
The client accepts the following parameters on initialization. You can
find the full documentation at [Invoice Desk Docs](https://invoicedesk.github.io/sdk-js/) page


| Parameter | Description                   | Required? | Default Value               |
| --------- | ----------------------------- | --------- | --------------------------- |
| host      | Invoice Desk API host         | No        | https://api.invoicedesk.app |
| version   | The version of the API to use | No        | v1                          |

```typescript
import { InvoiceDesk } from '@invoicedesk/client';

const inoviceDesk = new InvoiceDesk();
```

## Examples

#### Companies
```typescript
async function listCompanies() {
  const companies = await invoiceDesk.companies.listCompanies({
    accountId: '...'
  });

  return companies;
}
```

#### Invoices
```typescript
async function createInvoice(data) {
  const { data: invoice } = await invoiceDesk.invoices.createInvoice({
    createInvoicePayload: {
      clientId: "id-of-client-being-invoiced",
      date: "2021-01-01",
      currency: "USD",
      lineItems: [{
        title: "Nike Air",
        quantity: 1,
        price: 10000, // price in cents
        sortOrder: 0 // order the line item appears in the invoice
      }]
    },
    accountId: "...",
    companyId: "..."
  });

  return invoice;
}
```

