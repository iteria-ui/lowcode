import fs from 'fs';
import path from 'path';
import { addMenuItem } from '../../generation/generators/menu/menu-generator';
import { generateNewRoute } from '../../generation/generators/routes/route-generator';

describe("Route generator", () => {
    test("Generate new route", () => {
        const oldDeclaration = fs.readFileSync(path.resolve('src/codegen/tests/routes/files/generate-new-route.txt'), 'utf-8')

        const generatedSource = generateNewRoute(oldDeclaration, 'order', 'OrderList', './views/test/TestList')

        console.log(generatedSource)
    });

    test("Add menu item", () => {
        const oldDeclaration = fs.readFileSync(path.resolve('src/codegen/tests/routes/files/add-menu-item.txt'), 'utf-8')

        const generatedSource = addMenuItem(oldDeclaration, 'Test-Products', 'app/test-products')

        console.log(generatedSource)
    })
});