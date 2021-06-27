import { introspectonJson, typesJson } from './interfaces/introspectonJson';

const startOfQuery = 'query'
const objectIsQueryDefinition = 'query_root';
const startOfObject = '{';
const endOfObject = '}';
const limitOfCount = "limit";
const commentar = '# '
const fragmentDivider = '_'
const uuidVariable: string = '$uuid';

const ColumnArguments = 'args';
const ColumnKind = 'kind';
const ColumnName = 'name';
const ColumnFields = 'fields';

const newLine = '\n';
const whitespace = '  ';

let allFragments = '';
let ActualFragment: string[] = [];
let nameOfActualDataObject = '';
let dataObjects = [] as  any;
let indentation = "";





export function generateNewIntrospectonQuery(data: introspectonJson): string {
    let queryString = '';
    let dataTypes: typesJson[];
    
    dataTypes = data['__schema'].types
    dataTypes = getAllDataObjectsFromJSONAndDeleteItFromQueryData(dataTypes);
    queryString += getParameters(dataTypes);
    queryString += newLine + newLine + allFragments;
    console.log('Konecny query string:');
    console.log(queryString);

    return queryString
}

export function getAllDataObjectsFromJSONAndDeleteItFromQueryData(data: any) {
    for (let index = 0; index < data.length; index++) {
        if ( (data[index].kind == "OBJECT") && (data[index].name != "query_root") ) {
            pushDataObjectDoArray(data[index]);
        }
        if (data[index].name != "query_root") {
            delete data[index];
        }
    }

    let filtered = data.filter(function (el: any) {
        return el != null;
    });

    return filtered;
}

export function pushDataObjectDoArray(data: any) {
    let dataObject = {
        name: (ColumnName in data) ? data.name : "",
        fields: (ColumnFields in data) ? data.fields : [],
        description: ('description' in data) ? data.description : ""
    }

    dataObjects.push(dataObject)
}

export function getParameters(data: any): string {
    let queryString = '';
    if (data != null) {
        if(typeof data == 'object') {
            data = [data]
        }
        Object.entries(data).forEach(([key, value], index, index2) => {

            queryString += addKeyToQuery(key, value, true);
            if (typeof (value as Array<unknown>) != 'string') {
                queryString += processEntityWhenIsObject((value as Array<unknown>));
            } else {
                queryString += value;
            }

            queryString += addKeyToQuery(key, value, false);
        });
    }

    return queryString;
}

export function processEntityWhenIsObject(data: any[]) {
    let queryString = '';
    if (data.length != undefined) {
        for (let index = 0; index < data.length; index++) {
            if (data[index].name != objectIsQueryDefinition) {
                indentation += whitespace;
            }
            
            queryString += processEntityAccordKeys(data[index]);
        }
    } else {
        queryString += processEntityAccordKeys(data);
    }

    return queryString;
}

export function addKeyToQuery(key: string, data: any, startOfParentesis: boolean) {
    let stringToReturn = ''

    if (isNaN(Number(key)) ) {
        stringToReturn = startOfParentesis ? key + ' ' : ''; 
        stringToReturn += addParenthesisByValue(data, startOfParentesis);
    } 

    return stringToReturn;
}

export function processEntityAccordKeys(data: any) {
    let queryString = '';
    
    if ((data.name != objectIsQueryDefinition)) {
        queryString += addCommentar(data)
        queryString += addQueryNameOrTableNameToQuery(data);
        queryString += addStartOfLine(data);
    }

    addTypesOfObject(data);

    queryString += addFieldOfObject(data);

    if ((data.name != objectIsQueryDefinition)) {
        queryString += addEndOfLine(data);
    }
    nameOfActualDataObject = "";

    return queryString;
}

export function addTypesOfObject(data: any) {
    if ( ('type' in data) && !('fields' in data) ) {
        addTypesToString(data.type);
    }
}

export function addFieldOfObject(data: any) {
    let queryString = '';
    if (ColumnFields in data) {
        queryString += getParameters(data.fields);
    } else if (nameOfActualDataObject != "") {
        indentation += whitespace;
        for (let index = 0; index < dataObjects.length; index++) {
            if (dataObjects[index].name == nameOfActualDataObject) {
                queryString += addFieldsOrderByDataObject(dataObjects[index])
            }
        }
    }
    
    indentation = indentation.substr(whitespace.length);

    return queryString;
}

export function addFieldsOrderByDataObject(data: any) {
    let queryString = '';
    
    if (data[ColumnFields].length != 0) {
        queryString += startOfObject + newLine;
        queryString += createNewFragment(data);
        indentation = indentation.substr(whitespace.length);
        queryString += addParenthesisByValue(null, false);
    }

    return queryString;
}

export function createNewFragment(data: any) {
    let nameOfFragment = ActualFragment.join(fragmentDivider) + fragmentDivider + data[ColumnName];
    let queryString = indentation + '...' + nameOfFragment + newLine;
    let dataFields = data[ColumnFields];
    let fragmentIndentation: string = '';

    allFragments += 'fragment ' + nameOfFragment + ' on ' + data[ColumnName] + " " + addParenthesisByValueForFragment(data, true, fragmentIndentation);
    
    putTogetherFragmentTables(dataFields, true, fragmentIndentation)
    allFragments += addParenthesisByValueForFragment(null, false, fragmentIndentation);

    return queryString;
}

export function putTogetherFragmentTables(dataFields: any, canObject: boolean = true, fragmentIndentation: string) {
    for (let index = 0; index < dataFields.length; index++) {
            if (findTypeOfField(dataFields[index])) {
                if (canObject) {
                    putObjectToFragmentTables(dataFields[index], fragmentIndentation);
                }
            } else if (skipUuidType(dataFields[index])) {
                fragmentIndentation += whitespace;
                allFragments += fragmentIndentation + dataFields[index][ColumnName] + newLine;
                fragmentIndentation = fragmentIndentation.substr(whitespace.length)
            }
    }
}

export function putObjectToFragmentTables(dataField: any, fragmentIndentation: string) {
    for (let index = 0; index < dataObjects.length; index++) {
        if (dataObjects[index].name == dataField.name) {
            fragmentIndentation += whitespace;
            allFragments += fragmentIndentation + dataObjects[index][ColumnName] + ' ' + addParenthesisByValueForFragment(dataObjects[index], true, fragmentIndentation)
            
            putTogetherFragmentTables(dataObjects[index][ColumnFields], false, fragmentIndentation)

            fragmentIndentation = fragmentIndentation.substr(whitespace.length)
            allFragments += fragmentIndentation + addParenthesisByValueForFragment(null, false, fragmentIndentation)
        }
    }
}

export function findTypeOfField(dataFields: any) {
    let trullyReturn = false;

    if ('type' in dataFields) {
        trullyReturn = cyclefindTypeOfField(dataFields.type,)
    }
    
    return trullyReturn
}

export function cyclefindTypeOfField(data: any): boolean {
    let trullyReturn = false;

    if ('ofType' in data && data.ofType != null) {
        trullyReturn = cyclefindTypeOfField(data.ofType);
    }
    if (ColumnKind in data && data[ColumnKind] == 'OBJECT') {
        trullyReturn = true;
    }

    return trullyReturn;
}

export function skipUuidType(dataFields: any) {
    let trullyReturn = false;

    if ('type' in dataFields) {
        trullyReturn = cycleskipUuidType(dataFields.type,)
    }
    
    return trullyReturn
}

export function cycleskipUuidType(data: any): boolean {
    let trullyReturn = true;

    if ('ofType' in data && data.ofType != null) {
        trullyReturn = cycleskipUuidType(data.ofType);
    }
    if (ColumnKind in data && data[ColumnName] == 'uuid') {
        trullyReturn = false;
    }

    return trullyReturn;
}

export function addStartOfLine(data: any) {
    let queryString = '';

    if (ColumnName in data) {
        ActualFragment.push(data[ColumnName])
        queryString += ((ColumnFields in data) ? indentation + startOfObject + newLine : '');
    }

    return queryString;
}

export function addEndOfLine(data: any) {
    let queryString = '';
    let lastCharacter = 0;

    if (ColumnName in data) {
        if ((ColumnFields in data)) {
            queryString += addParenthesisByValue(null, false);
        } else {
            queryString += '}\n';
            queryString += newLine;
        }
        ActualFragment.splice(ActualFragment.length - 1)
    }

    return queryString;
}


export function addCommentar(data: any) {
    let queryString = '';
    if ('description' in data) {
        if (data.description != null) {
            queryString += indentation + commentar + data.description + newLine;
        }
    }
    return queryString;
}

export function addQueryNameOrTableNameToQuery(data: any) {
    let queryString = '';

    if (ColumnName in data) {
        if ( (data.name == objectIsQueryDefinition) && (ColumnFields in data) ) {
            return queryString;
        } else {
            queryString += definiteNewQuery(data)
            queryString += indentation + data[ColumnName] + ' ';
            queryString += addArgumentFortable(data)
        }
    }
    return queryString;
}

export function addArgumentFortable(data: any) {
    let argumentForString = "(";
    
    if ((ColumnArguments in data) && (data[ColumnArguments].length != 0) ) {
        for (let argument = 0; argument < data[ColumnArguments].length; argument++) {
            argumentForString += addArgumentLimit(data[ColumnArguments][argument][ColumnName])
            argumentForString += addArgumentUuid(data[ColumnArguments][argument])
        }
    }
    if (argumentForString != "(") {
        argumentForString += ") "
    } else {
        argumentForString += ""
    }
    return argumentForString;
}

export function addArgumentLimit(data: any) {
    let limitForString = '';
    
    if (data == 'limit') {
        limitForString = limitOfCount + ': 100 ';
    }
    return limitForString;
}

export function addArgumentUuid(data: any) {
    let uuidForString = '';
    if (findUuidInType(data.type)) {
        uuidForString = data[ColumnName] + ': ' + uuidVariable + ' ';
    }

    return uuidForString;
}

export function findUuidInType(data: any): boolean {
    let isUuid = false;

    if ('ofType' in data && data.ofType != null) {
        isUuid = findUuidInType(data.ofType);
    }
    if (('name' in data) && (data.name == "uuid")) {
        isUuid = true
    }

    return isUuid;
}

export function isTypeANonNull(data: any): boolean {
    let isNonNull: boolean = false;

    if ((ColumnKind in data) && (data[ColumnKind] == "NON_NULL")) {
        isNonNull = true;
    }
    if ('ofType' in data && data.ofType != null && (!isNonNull)) {
        isNonNull = isTypeANonNull(data.ofType);
    }
    if ('type' in data && data.type != null) {
        isNonNull = isTypeANonNull(data.type);
    }

    return isNonNull
}

export function addUuidToVariablesOfQuery(data: any, isNonNull: boolean): string {
    let variableQuery = "";
    
    if ('type' in data && data.type != null) {
        variableQuery += addUuidToVariablesOfQuery(data.type, isNonNull);
    }
    if ('ofType' in data && data.ofType != null) {
        variableQuery += addUuidToVariablesOfQuery(data.ofType, isNonNull);
    }
    if (('name' in data) && (data.name == "uuid")) {
        variableQuery += " (" + uuidVariable + ": " + data.name
        variableQuery += isNonNull ? "!" : ""
        variableQuery += ") "
    }
    
    return variableQuery;
}

export function findUuidArgumentInData(data: any) {
    let variableForQueryString = '';
    let isNonNull : boolean = false;
    for (let index = 0; index < data.length; index++) {
        if (findUuidInType(data[index].type)){
            isNonNull = isTypeANonNull(data[index]);
            variableForQueryString += addUuidToVariablesOfQuery(data[index], isNonNull)
        }
    }

    return variableForQueryString
}

export function definiteNewQuery(data: any) {
    var queryString = '';
    var variablesForQuery = findUuidArgumentInData(data[ColumnArguments])

    queryString += startOfQuery + ' ' + data[ColumnName] + variablesForQuery + ' {\n';

    return queryString
}

export function addTypesToString(data: any) {
    if ('ofType' in data && data.ofType != null) {
        addTypesToString(data.ofType);
    }
    if (ColumnKind in data && data[ColumnKind] == 'OBJECT') {
        nameOfActualDataObject = data[ColumnName];
    }
}

export function addParenthesisByValue(data: any, isStart: boolean) {
    if (typeof data != 'string') {
        return isStart ? startOfObject + newLine : indentation + endOfObject + newLine;
    } else {
        return '';
    }
}

export function addParenthesisByValueForFragment(data: any, isStart: boolean, fragmentIndentation: string) {
    if (typeof data != 'string') {
        return isStart ? startOfObject + newLine : fragmentIndentation + endOfObject + newLine;
    } else {
        return '';
    }
}