import { generateCode } from "ts-factory-code-generator-generator";
import { getListPageComponentName } from "../../generation/entity/helper";
import TemplateResolver from "../../generation/generators/template/template-resolver";
import { parseGraphqlTypes, sourceFileEntity } from "../helper";
import { graphqlGenTs1 } from "../typeAlias.example";

describe("TemplateResolver", () => {
    test("Generate page for list component", () => {
        const myClassFile = parseGraphqlTypes(graphqlGenTs1)
        const testEntity = sourceFileEntity(myClassFile)
        const templateResolver = new TemplateResolver(testEntity);

        const template = `
import { useGeneratedQuery } from '../generated'
import Fetching from './Fetching'
import Error from './Error'
import ListPlaceholder from './ListPlaceholder'

function App() {
    const [result] = useGeneratedQuery({
        variables: {}
    })

    const { fetching, error, data } = result
    if (fetching) return <Fetching />;
    if (error) return <Error error={error} />;

    return (
        <ListPlaceholder customers={data?.customers} />
    );
}

export default App;
              `;

        const generatedCode = templateResolver.generateListPage(template);
        console.log(`generated list page: ${generateCode}`)

        expect(generatedCode).toContain('import { CustomerList } from "./CustomerList";');
        expect(generatedCode).toContain('<CustomerList customers={data?.customers}/>');
        expect(generatedCode).toContain(`function ${getListPageComponentName(testEntity!)}`);
        
        expect(generatedCode).not.toContain("import ListPlaceholder from './ListPlaceholder'");
        expect(generatedCode).not.toContain("<ListPlaceholder customers={data?.customers} />");
        expect(generatedCode).not.toContain("function App()");

    });
});