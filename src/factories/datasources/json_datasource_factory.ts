import { ImplToolDatasource } from "../../external/datasources/impl_tool_datasource";
import { IToolDatasource } from "../../infra/datasources/i_tool_datasource";

export const makeToolDatasource = (): IToolDatasource => {
  return new ImplToolDatasource();
}