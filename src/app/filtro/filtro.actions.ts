import { createAction, props, createReducer } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] set Filtro',
  props<{filtro:filtrosValidos }>()
  );


