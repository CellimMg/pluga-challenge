import { Tool } from "../entities/tool_entity";
import { IToolRepository } from "../repositories/i_tool_repository";

export class ToolUsecases{
    private toolRepository: IToolRepository;

    constructor(toolRepository: IToolRepository) {
        this.toolRepository = toolRepository;
    }

    async getTools(): Promise<Tool[]> {
        const tools = await this.toolRepository.getTools();
        return tools;
    }
}