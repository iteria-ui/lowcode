export interface introspectonJson {
    __schema: {
        directives: object[],
        mutationType: object,
        queryType: object,
        subscriptionType: object,
        types: typesJson[]
    }
}

export interface typesJson {
    description: string|null,
    enumValues: object[]|null,
    fields: object[]|null,
    inputFields: object[]|null,
    interfaces: []|null,
    kind: string,
    name: string,
    possibleTypes: null
}