import { addMessage } from "../../generation/generators/localization/messages-generator";

describe("NessagesGenerator", () => {
    test("Add new message", () => {
        const definitionSource = `
{
    "a": "1",
    "b": "2",
    "c": "3"
}   
`;

        const result = addMessage(definitionSource, 'd', '4');

        expect(result).not.toBe(undefined);

        if(result) {
            const jsonResult = JSON.parse(result);

            expect(jsonResult).toStrictEqual({
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4"
            });
        }
    });
});