import { Tool } from "../entities/tool_entity";

export interface IToolRepository{
    getTools(): Promise<Tool[]>;
}