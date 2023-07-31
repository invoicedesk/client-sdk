import type { Company } from './Company';
export type Client = {
    /**
     * ID of the client
     */
    id: string;
    /**
     * ID of the company this client belongs to
     */
    companyId: string;
    /**
     * Name of the client
     */
    name: string;
    /**
     * Whether this client is a company or an individual
     */
    isCompany: boolean;
    /**
     * Address of the client
     */
    address: string;
    /**
     * Client contact information
     */
    contactInfo: Array<string>;
    /**
     * Any metadata attached with the client
     */
    metadata: string;
    /**
     * Date this client was created in our system
     */
    createdAt: string;
    /**
     * The company this client is associated with
     */
    company: Company;
};
//# sourceMappingURL=Client.d.ts.map