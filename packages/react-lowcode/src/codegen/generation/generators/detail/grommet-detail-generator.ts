import ts, { factory } from "typescript";
import {
  PageComponent,
} from "../../react-components/react-component-helper";
import { DetailComponentDefinitionBase } from "../../../definition/detail-definition-core";
import { Formatter } from "../../../definition/context-types";
import { Entity, getProperties, Property } from "../../entity";
import { createNamedImportDeclaration, createNameSpaceImport, uniqueImports } from "../../../ast/imports";
import { GeneratorHelper } from "../helper";
import ReactIntlFormatter from "../../react-components/react-intl/intl-formatter";
import { GrommetDetailComponents } from "../../../definition/grommet/detail";
import { DetailGenerator } from "../detail/detail-generator-factory";
import { getPropertyType, PropertyType } from "../../graphql/typeAlias";
import GenerationContext from "../../context/context";

export default class GrommetDetailGenerator
  implements DetailGenerator {
  private readonly _helper: GeneratorHelper
  private _imports: ts.ImportDeclaration[] = []
  private _context: GenerationContext
  private _entity: Entity
  private _intlFormatter: ReactIntlFormatter

  constructor(generationContext: GenerationContext, entity: Entity) {
    this._helper = new GeneratorHelper(generationContext, this._imports)
    this._context = generationContext
    this._entity = entity
    this._intlFormatter = new ReactIntlFormatter(generationContext, this._imports)
  }
  getDetailDefinition(): DetailComponentDefinitionBase {
    return GrommetDetailComponents;
  }

  generateDetailComponent(): PageComponent {
    var statements = this.createStatements();

    var functionalComponent = this.createConstFunction(
      "GeneratedFormikComponent",
      statements
    );

    this._imports = [...this._imports, ...this._intlFormatter.getImports()];

    var uniqueFileImports = uniqueImports(this._imports)
    uniqueFileImports.push(
      createNameSpaceImport("React", "react")
    );
    uniqueFileImports.push(
      createNamedImportDeclaration(
        "TextInput",
        "grommet"
      )
    );
    uniqueFileImports.push(
      createNamedImportDeclaration("useFormik", "formik")
    );

    uniqueFileImports.push(
      createNamedImportDeclaration("useIntl", "react-intl")
    );

    uniqueFileImports.push(
      createNamedImportDeclaration("Customer", "./Customer")
    );

    return { functionDeclaration: functionalComponent, imports: uniqueFileImports };
  }
  private createStatements(): ts.Statement[] {
    let statements = new Array<ts.Statement>();
    if (this._context.formatter === Formatter.ReactIntl) {
      statements.push(this._intlFormatter.getImperativeHook());
    }

    let fields = this.createInputsForEntity();

    var formElement = this.createFormElement(fields);

    let wrapper = this.createFormikWrapper(formElement);
    statements.push(
      factory.createReturnStatement(
        factory.createParenthesizedExpression(wrapper)
      )
    );

    return statements;
  }
  private createInputsForEntity(): ts.JsxChild[] {
    let inputs: ts.JsxChild[] = [];

    getProperties(this._entity).forEach((property) => {
      let propertyInput = this.tryCreateInputForProperty(property);

      if (propertyInput) {
        inputs.push(propertyInput);
      }
    });

    return inputs;
  }

  private tryCreateInputForProperty(
    property: Property
  ): ts.JsxChild | undefined {
    let propType: PropertyType = getPropertyType(property);
    let propertyName = property.getName();

    let input: ts.JsxChild | undefined;

    switch (propType) {
      case PropertyType.string:
        input = this.createTextFieldComponent(propertyName, propertyName);
        break;
      case PropertyType.datetime:
        input = this.createDateComponent(propertyName, propertyName);
        break;
    }

    return input;
  }
  private createTextFieldComponent(
    name: string,
    text: string
  ): ts.JsxSelfClosingElement {
    return factory.createJsxSelfClosingElement(
      factory.createIdentifier("TextInput"),
      undefined,
      factory.createJsxAttributes([
        factory.createJsxAttribute(
          factory.createIdentifier("id"),
          factory.createStringLiteral(name)
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("type"),
          factory.createStringLiteral("input")
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("placeholder"),
          factory.createStringLiteral(text)
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("value"),
          factory.createJsxExpression(
            undefined,
            factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier("intl"),
                factory.createIdentifier("formatMessage")
              ),
              undefined,
              [factory.createObjectLiteralExpression(
                [factory.createPropertyAssignment(
                  factory.createIdentifier("id"),
                  factory.createPropertyAccessExpression(
                    factory.createPropertyAccessExpression(
                      factory.createIdentifier("formik"),
                      factory.createIdentifier("values")
                    ),
                    factory.createIdentifier(text)
                  )
                )],
                false
              )]
            )
          )
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("onChange"),
          factory.createJsxExpression(
            undefined,
            factory.createPropertyAccessExpression(
              factory.createIdentifier("formik"),
              factory.createIdentifier("handleChange")
            )
          )
        ),
      ])
    );
  }
  private createFormElement(fields: ts.JsxChild[]): ts.JsxElement {
    return factory.createJsxElement(
      factory.createJsxOpeningElement(
        factory.createIdentifier("form"),
        undefined,
        factory.createJsxAttributes([
          factory.createJsxAttribute(
            factory.createIdentifier("onSubmit"),
            factory.createJsxExpression(
              undefined,
              factory.createPropertyAccessExpression(
                factory.createIdentifier("formik"),
                factory.createIdentifier("handleSubmit")
              )
            )
          ),
        ])
      ),
      fields,
      factory.createJsxClosingElement(factory.createIdentifier("form"))
    );
  }

  private createDateComponent(
    name: string,
    label: string
  ): ts.JsxSelfClosingElement {
    return factory.createJsxSelfClosingElement(
      factory.createIdentifier("TextInput"),
      undefined,
      factory.createJsxAttributes([
        factory.createJsxAttribute(
          factory.createIdentifier("id"),
          factory.createStringLiteral(name)
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("type"),
          factory.createStringLiteral("date")
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("placeholder"),
          factory.createStringLiteral(label)
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("value"),
          factory.createJsxExpression(
            undefined,
            factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier("intl"),
                factory.createIdentifier("formatDate")
              ),
              undefined,
              [factory.createPropertyAccessExpression(
                factory.createPropertyAccessExpression(
                  factory.createIdentifier("formik"),
                  factory.createIdentifier("values")
                ),
                factory.createIdentifier(name)
              )]
            )
          )
        ),
        factory.createJsxAttribute(
          factory.createIdentifier("onChange"),
          factory.createJsxExpression(
            undefined,
            factory.createPropertyAccessExpression(
              factory.createIdentifier("formik"),
              factory.createIdentifier("handleChange")
            )
          )
        ),
      ])
    );
  }

  private createFormikWrapper(formik: ts.JsxElement) {
    return factory.createJsxElement(
      factory.createJsxOpeningElement(
        factory.createIdentifier("div"),
        undefined,
        factory.createJsxAttributes([
          factory.createJsxAttribute(
            factory.createIdentifier("style"),
            factory.createJsxExpression(
              undefined,
              factory.createObjectLiteralExpression(
                [
                  factory.createPropertyAssignment(
                    factory.createIdentifier("marginLeft"),
                    factory.createNumericLiteral("25")
                  ),
                  factory.createPropertyAssignment(
                    factory.createIdentifier("marginRight"),
                    factory.createNumericLiteral("25")
                  ),
                ],
                false
              )
            )
          ),
        ])
      ),
      [
        factory.createJsxText("\
              ", true),
        formik,
        factory.createJsxText("\
            ", true),
      ],
      factory.createJsxClosingElement(factory.createIdentifier("div"))
    );
  }

  private creteInitialValuesForEntity() {
    let inputs: ts.PropertyAssignment[] = [];

    getProperties(this._entity).forEach((property) => {
      let propertyInput = this.tryCreateInitialValueForProperty(property);

      if (propertyInput) {
        inputs.push(propertyInput);
      }
    });

    return inputs;
  }

  private tryCreateInitialValueForProperty(
    property: Property
  ): ts.PropertyAssignment | undefined {
    let propType: PropertyType = getPropertyType(property);
    let propertyName = property.getName();

    let assignment: ts.PropertyAssignment | undefined;

    switch (propType) {
      case PropertyType.string:
        assignment = factory.createPropertyAssignment(
          factory.createIdentifier(propertyName),
          factory.createIdentifier("customer." + propertyName)
        );
        break;
      case PropertyType.datetime:
        assignment = factory.createPropertyAssignment(
          factory.createIdentifier(propertyName),
          factory.createIdentifier("customer." + propertyName)
        );
        break;
    }

    return assignment;
  }

  private createConstFunction(
    componentName: string,
    body: ts.Statement[]
  ): ts.VariableStatement {
    return factory.createVariableStatement(
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createVariableDeclarationList([
        factory.createVariableDeclaration(
          factory.createIdentifier(componentName),
          undefined,
          factory.createTypeReferenceNode(
            factory.createQualifiedName(
              factory.createIdentifier("React"),
              factory.createIdentifier("FC")
            ),
            [
              factory.createTypeReferenceNode(
                factory.createIdentifier("Customer"),
                undefined
              ),
            ]
          ),
          factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("(customer)"),
                undefined,
                undefined,
                undefined
              ),
            ],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createBlock([
              factory.createVariableStatement(
                undefined,
                factory.createVariableDeclarationList(
                  [factory.createVariableDeclaration(
                    factory.createIdentifier("intl"),
                    undefined,
                    undefined,
                    factory.createCallExpression(
                      factory.createIdentifier("useIntl"),
                      undefined,
                      []
                    )
                  )],
                  ts.NodeFlags.Const
                )
              ),
              factory.createVariableStatement(
                undefined,
                factory.createVariableDeclarationList(
                  [
                    factory.createVariableDeclaration(
                      factory.createIdentifier("formik"),
                      undefined,
                      undefined,
                      factory.createCallExpression(
                        factory.createIdentifier("useFormik"),
                        undefined,
                        [
                          factory.createObjectLiteralExpression(
                            [
                              factory.createPropertyAssignment(
                                factory.createIdentifier("initialValues"),
                                factory.createObjectLiteralExpression(
                                  this.creteInitialValuesForEntity(),
                                  false
                                )
                              ),
                              factory.createPropertyAssignment(
                                factory.createIdentifier("onSubmit"),
                                factory.createArrowFunction(
                                  undefined,
                                  undefined,
                                  [
                                    factory.createParameterDeclaration(
                                      undefined,
                                      undefined,
                                      undefined,
                                      factory.createIdentifier("values"),
                                      undefined,
                                      undefined,
                                      undefined
                                    ),
                                  ],
                                  undefined,
                                  factory.createToken(
                                    ts.SyntaxKind.EqualsGreaterThanToken
                                  ),
                                  factory.createBlock([], false)
                                )
                              ),
                            ],
                            true
                          ),
                        ]
                      )
                    ),
                  ],
                  ts.NodeFlags.Const
                )
              ),
              factory.createBlock(body, true),
            ])
          )
        ),
      ])
    );
  }
}