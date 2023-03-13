import { Tool } from "../entities/tool_entity";

export class ToolUsecases{
    private toolRepository: ToolRepository;

    constructor(toolRepository: ToolRepository) {
        this.toolRepository = toolRepository;
    }

    async getTools(): Promise<Tool[]> {
        const tools = await this.toolRepository.getTools();
        return tools;
    }
}