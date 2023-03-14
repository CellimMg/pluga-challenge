import {Tool} from "../../domain/entities/tool_entity";
import {IToolDatasource} from "../../infra/datasources/i_tool_datasource";
var fs = require('fs');

export class ImplToolDatasource implements IToolDatasource {


    async getTools(): Promise<Tool[]> {
        //read json with fetch
        const response = await fetch('./tools.json');
        const data = await response.json();
        const tools: Tool[] = data.map((tool: any) => {
            return Tool.fromJson(tool);
        });
        return tools;
    }
}