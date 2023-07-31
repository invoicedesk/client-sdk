export type UpdateClientData = {
    /**
     * Name of the client is required
     */
    name: string;
    /**
     * If the client is a company
     */
    isCompany?: boolean;
    /**
     * Address of the client
     */
    address?: string;
    /**
     * Information on how to contact the client
     */
    contactInfo?: Array<string>;
    /**
     * Arbitrary information about the client.
     */
    metadata?: string;
};
//# sourceMappingURL=UpdateClientData.d.ts.map