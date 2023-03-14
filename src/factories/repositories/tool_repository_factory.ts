import {ImplToolRepository} from '../../infra/repositories/impl_tool_repository';
import {makeToolDatasource} from '../datasources/json_datasource_factory';

export const makeToolRepository = () => {
    return new ImplToolRepository(makeToolDatasource());
}