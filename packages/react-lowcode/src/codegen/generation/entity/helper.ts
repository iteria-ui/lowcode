import ts from "typescript";
import Pluralize from "typescript-pluralize";
import { Entity } from ".";
import { camalizeString } from "../../../strings/camel";
import { identifier } from "../../ast/identifier";

export function getEntityName(entity: Entity): string{
    return camalizeString(entity.getName())
}

export function getListComponentName(entity: Entity) {
    return `${entity.getName()}List`
}

export function getListPageComponentName(entity: Entity) {
    return `${getListComponentName(entity)}Page`
}

export function getInputParameterIdentifier(entity: Entity) : ts.Identifier {
    return identifier(getPluralizedEntityName(entity.getName()))
}

export function getPluralizedEntityName(entityName: string) : string {
    return Pluralize.plural(camalizeString(entityName))
}
