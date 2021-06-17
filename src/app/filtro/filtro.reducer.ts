import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state, {filtro}) => filtro),


);




export function filtroReducer(state= initialState, action: Action) {
  return _filtroReducer(state, action);
}
