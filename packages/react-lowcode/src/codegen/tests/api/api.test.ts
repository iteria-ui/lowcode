import fs from 'fs'
import path from 'path'
import { ts } from 'ts-morph';
import { SyntaxKind } from 'typescript';
import { findByCondition, SourceLineCol } from '../../../ast';
import { addFormInput, getFormWidgetProperties, isSelectedFormWidget, setFormWidgetProperties } from '../../detail';
import MuiDetailGenerator from '../../generation/generators/detail/mui-detail-generator';
import { CodegenRw } from '../../io/codegenRw';
import { addColumn, deleteColumn, getColumnSourcePosition, isSelectedDataTable } from '../../list';
import { createAst } from '../helper';
import { TestListHelper } from '../list/list-helper';
import { graphqlGenTs1 } from '../typeAlias.example';

describe(".api tests", () => {
    describe("Preparing: test auxiliary functions to verify the tests", () => {
        test(".test TestListHelper.getMuiDataTablePosition", () => {
            const sourceCode = fs.readFileSync(path.resolve('src/codegen/tests/list/files/is-datatable-test-file.txt'), 'utf-8');
            const position = TestListHelper.getMuiDataTablePosition(sourceCode);


            expect(position).toStrictEqual({
                fileName: '',
                lineNumber: 12,
                columnNumber: 65
            });
        });

        test(".test TestListHelper.getMuiDataTableColumnNames", () => {
            const sourceCode = fs.readFileSync(path.resolve('src/codegen/tests/list/files/is-datatable-test-file.txt'), 'utf-8');
            const position = TestListHelper.getMuiDataTablePosition(sourceCode);
            const columnNames = TestListHelper.getMuiDataTableColumnNames(sourceCode, position);

            expect(columnNames).toStrictEqual([
                'id',
                'name',
                'createdAt',
                'email'
            ]);
        });
    });

    describe("Running API tests:", () => {
        test(".is data table widget", () => {
            const file = fs.readFileSync(path.resolve('src/codegen/tests/list/files/is-datatable-test-file.txt'),'utf-8');
      
            const source : SourceLineCol = {lineNumber: 12, columnNumber:17, fileName:'test'};
            const isSelected = isSelectedDataTable(file, source);
            expect(isSelected).toBe(true);
        }); 
    
        test(".is form widget", () => {
            const file = fs.readFileSync(path.resolve('src/codegen/tests/detail/detail-test-file.txt'),'utf-8');
      
            const source : SourceLineCol = {lineNumber: 50, columnNumber:19, fileName:'test'};
            const isSelected = isSelectedFormWidget(file, source);
            expect(isSelected).toBe(true);
        }); 
    
        test(".add column (MUI DataTable)", async () => {
            const filePath = 'src/codegen/tests/list/files/is-datatable-test-file.txt';
            const source : SourceLineCol = {lineNumber: 12, columnNumber:17, fileName:filePath};
            const result = await addColumn(graphqlGenTs1, new CodegenRw(), source, {property: 'testdate', entityName: 'Customer'});
    
            expect(result).not.toBe(undefined);
    
            if(result) {
                const newDataTablePosition = TestListHelper.getMuiDataTablePosition(result);
                const columnNames = TestListHelper.getMuiDataTableColumnNames(result, newDataTablePosition);
    
                expect(columnNames).toStrictEqual([
                    'id',
                    'name',
                    'createdAt',
                    'email',
                    'testdate'
                ]);
            }
        });
    
        test(".add form input", () => {
            const filePath = 'src/codegen/tests/detail/detail-test-file.txt';
            const source : SourceLineCol = {lineNumber: 50, columnNumber:19, fileName:filePath};
    
            // TODO:PC: Expected result: 
            // - added property "test2" to initialValues
            // - added TextField with id: test2
            addFormInput(graphqlGenTs1, new CodegenRw(), source, {property: 'test2', entityName: 'Customer'}).then(generated => console.log(generated));
        });
    
        test(".delete column (MUI DataTable)", async () => {
            const filePath = 'src/codegen/tests/list/list-test-file.txt';
            const source: SourceLineCol = { lineNumber: 10, columnNumber: 61, fileName: filePath };
            const result = await deleteColumn(new CodegenRw(), source, { index: 4 });
            
            expect(result).not.toBe(undefined);
    
            if(result) {
                const newDataTablePosition = TestListHelper.getMuiDataTablePosition(result);
                const columnNames = TestListHelper.getMuiDataTableColumnNames(result, newDataTablePosition);
    
                expect(columnNames).toStrictEqual([
                    'id',
                    'name',
                    'createdAt',
                    'email'
                ]);
            }
        });
    
        test(".get column position (MUI DataTable with formatter)", async () => {
            const filePath = 'src/codegen/tests/list/files/data-table-mui-with-formatter-test-file.txt';
            const source: SourceLineCol = { lineNumber: 16, columnNumber: 77, fileName: filePath };
            const result = await getColumnSourcePosition(new CodegenRw(), source, { index: 7 });
    
            expect(result).toStrictEqual({
                columnPosition: {
                    fileName: filePath,
                    columnNumber: 13,
                    lineNumber: 14,
                    length: 215
                  },
                  headerPosition: {
                    fileName: filePath,
                    columnNumber: 113,
                    lineNumber: 14,
                    length: 113
                  },
                  valuePosition: {
                    fileName: filePath,
                    columnNumber: 58,
                    lineNumber: 14,
                    length: 53
                  }
            });
        }); 
    
        test(".get Widget Fields (MUI TextField)", async () => {
            const filePath = 'src/codegen/tests/detail/detail-test-file.txt';
            const source: SourceLineCol = { lineNumber: 80, columnNumber: 19, fileName: filePath };
            const result = await getFormWidgetProperties(new CodegenRw(), source);
    
            expect(result.properties).toStrictEqual(
                [
                    {
                        name: "fullWidth",
                        value: "true"
                    },
                    {
                        name: "required",
                        value: "true"
                    },
                    {
                        name: "disabled",
                        value: "false"
                    },
                    {
                        name: "rows",
                        value: "10"
                    },
                    {
                        name: "id",
                        value: "updatedAt"
                    },
                    {
                        name: "type",
                        value: "date"
                    },
                    {
                        name: "label",
                        value: "updatedAt"
                    }
                ]
            );
        }); 
        
        test(".set Widget Fields (MUI TextField)", async () => {
            const properties =             [
                {
                    name: "fullWidth",
                    value: "false"
                },
                {
                    name: "required",
                    value: "false"
                },
                {
                    name: "disabled",
                    value: "true"
                },
                {
                    name: "rows",
                    value: "5"
                },
                {
                    name: "id",
                    value: "updatedAtTime"
                },
                {
                    name: "type",
                    value: "time"
                },
                {
                    name: "label",
                    value: "updatedAtTime"
                }
            ];
    
            const expectedProperties = [
                {
                    name: "required",
                    value: "false"
                },
                {
                    name: "disabled",
                    value: "true"
                },
                {
                    name: "rows",
                    value: "5"
                },
                {
                    name: "id",
                    value: "updatedAtTime"
                },
                {
                    name: "type",
                    value: "time"
                },
                {
                    name: "label",
                    value: "updatedAtTime"
                }
            ];
    
            const filePath = 'src/codegen/tests/detail/detail-test-file.txt';
            const source: SourceLineCol = { lineNumber: 80, columnNumber: 19, fileName: filePath };
            const result = await setFormWidgetProperties(new CodegenRw(), source, { properties: properties });
    
            expect(result).not.toBe(undefined);
    
            if(result) {
                const resultAst = createAst(result);
                var updatedAtNode = findByCondition<ts.Node>(resultAst, (node: ts.Node) => {
                    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
                        const idProperty = node.attributes.properties.find(p => p.kind === SyntaxKind.JsxAttribute && p.name.text === 'id');
                        if(idProperty && ts.isJsxAttribute(idProperty) && idProperty.initializer && ts.isStringLiteral(idProperty.initializer)) {
                            return idProperty.initializer.text === 'updatedAtTime';
                        }
                    }
                    return false;
                });
        
                expect(updatedAtNode).not.toBe(undefined);
    
                if(updatedAtNode) {
                    const position = resultAst.getLineAndCharacterOfPosition(updatedAtNode.getStart());
                    const newProperties = new MuiDetailGenerator({}).getFormWidgetPropertiesFromAst(resultAst, { lineNumber: position.line + 1, columnNumber: position.character + 1, fileName: '' });
    
                    expect(newProperties.properties).toStrictEqual(expectedProperties);
                }
            }
        });  
    
        test(".set Widget Fields (MUI TextField) (return undefined if no property has been changed)", async () => {
            const properties =             [
                {
                    name: "disabled",
                    value: "false"
                },
                {
                    name: "rows",
                    value: "10"
                },
                {
                    name: "id",
                    value: "updatedAt"
                }
            ];
    
            const filePath = 'src/codegen/tests/detail/detail-test-file.txt';
            const source: SourceLineCol = { lineNumber: 80, columnNumber: 19, fileName: filePath };
            const result = await setFormWidgetProperties(new CodegenRw(), source, { properties: properties });
    
            expect(result).toBe(undefined);
        });  
    });
});