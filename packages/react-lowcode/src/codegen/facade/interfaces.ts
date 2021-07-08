import { Entity, Property } from "../generation/entity";

export interface FacadeInsertOptions{
    entity?: Entity,
    entityField: Property;
    index?: number;
}

export interface FacadeDeleteOptions {
    index: number
}

export interface RouteOptions {
    routeFilePath: string
    componentRouteUri: string,
    componentName: string,
    componentFilePath: string
}

export interface MenuItemOptions {
    menuDefinitionFilePath: string,
    itemTitle: string,
    itemUri: string,
    itemIcon: string
}