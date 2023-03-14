import { IToolRepository } from "../../domain/repositories/i_tool_repository";
import { ToolUsecases } from "../../domain/usecases/tool_usecases";
import {makeToolRepository} from "../repositories/tool_repository_factory";

export const makeToolUsecases = () => {
    return new ToolUsecases(makeToolRepository());
}