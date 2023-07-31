export type CreateProductPayload = {
    /**
     * Name of the product is required
     */
    name: string;
    /**
     * description of the product
     */
    description?: string;
    /**
     * HSN of the product
     */
    hsn?: string;
    /**
     * Price of the product
     */
    price: number;
    /**
     * Unit of the product
     */
    units?: string;
    /**
     * Metadata allows you to attach arbitrary bits of information to the product. This metadata is searchable. For example: {tags: ["clothing", "male"]}
     */
    metadata?: string;
};
//# sourceMappingURL=CreateProductPayload.d.ts.map