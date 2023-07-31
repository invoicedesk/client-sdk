export type InvoiceLineItem = {
    /**
     * ID of the line item
     */
    id: string;
    /**
     * ID of the associated invoice
     */
    invoiceId: string;
    /**
     * ID of the associated product or service. If null, the product or service is not associated internally
     */
    itemId: string;
    /**
     * Type of line item.
     */
    itemType: InvoiceLineItem.itemType;
    /**
     * Title of the line item
     */
    title: string;
    /**
     * Short description of the line item
     */
    description: string;
    /**
     * Price at which this item was invoiced
     */
    price: number;
    /**
     * Quantity of the invoiced item
     */
    quantity: number;
    /**
     * Order in which the item appears in the rendered invoice
     */
    sortOrder: number;
    /**
     * Any associated metadata when the invoice was created
     */
    metadata: Record<string, any>;
    /**
     * Timestamp of line item creation
     */
    createdAt: string;
};
export declare namespace InvoiceLineItem {
    /**
     * Type of line item.
     */
    enum itemType {
        PRODUCT = "product"
    }
}
//# sourceMappingURL=InvoiceLineItem.d.ts.map