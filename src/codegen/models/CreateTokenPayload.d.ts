export type CreateTokenPayload = {
    /**
     * Name of the api token
     */
    name: string;
    /**
     * Date when this token expires. This token will be automatically revoked beyond this date
     */
    expiresAt?: string;
    /**
     * Authorization permissions for the token
     */
    abilities?: string;
};
//# sourceMappingURL=CreateTokenPayload.d.ts.map