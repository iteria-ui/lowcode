import { generateNewIntrospectonQuery } from "./functions";
import { constantsFoTestingGeneratorQueries } from './scenaria'


describe("codegen queryTest", () => {
    test(".test query string", () => {
        const queryString = generateNewIntrospectonQuery(constantsFoTestingGeneratorQueries.scenario7); 
        expect(typeof queryString).toBe("string");       
    });

    
})
