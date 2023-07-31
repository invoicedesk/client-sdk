import type { Company } from './Company';
export type Product = {
    /**
     * ID of the product
     */
    id: string;
    /**
     * ID of the company this product belongs to
     */
    companyId: string;
    /**
     * Name of the product
     */
    name: string;
    /**
     * Short description of the product
     */
    description: string;
    /**
     * Harmonised System of Nomenclature (HSN) code
     */
    hsn: string;
    /**
     * Price of the product
     */
    price: number;
    /**
     * Units in which this product is sold
     */
    units: string;
    /**
     * Arbitrary metadata attached to this product
     */
    metadata: string;
    /**
     * Details of the company this product belongs to
     */
    company: Company;
    /**
     * Timestamp at which this product was created
     */
    createdAt: string;
    /**
     * Timestamp at which this product was deleted
     */
    deletedAt: string;
};
//# sourceMappingURL=Product.d.ts.map