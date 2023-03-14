import { Tool } from "../../domain/entities/tool_entity";

export interface IToolDatasource{
    getTools(): Promise<Tool[]>;
}