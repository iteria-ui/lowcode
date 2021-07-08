export function addMessage(definitionSource: string, key: string, value: string): string | undefined {
    const json = JSON.parse(definitionSource);

    if(!(key in json)) {
        return JSON.stringify({...json, ...{ [key]: value}}, undefined, 4);
    }
}