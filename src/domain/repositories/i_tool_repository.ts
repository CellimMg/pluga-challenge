import { Tool } from "../entities/tool_entity";

export abstract class IToolRepository{
    abstract getTools(): Promise<Tool[]>;
}