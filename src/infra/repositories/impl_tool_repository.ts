import { Tool } from "../../domain/entities/tool_entity";
import {IToolRepository} from "../../domain/repositories/i_tool_repository";
import {IToolDatasource} from "../datasources/i_tool_datasource";

export class ImplToolRepository implements IToolRepository {

    private toolDataSource: IToolDatasource;

    constructor(toolDataSource: IToolDatasource) {
        this.toolDataSource = toolDataSource;
    }

    async getTools(): Promise<Tool[]> {
        return await this.toolDataSource.getTools();
    }
}