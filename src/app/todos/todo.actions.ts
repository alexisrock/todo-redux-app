import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[Todo] crear todo',
  props<{texto:string }>()
  );

export const completado = createAction(
  '[Todo] completado todo',
  props<{id:number }>()
    );
export const editar = createAction(
  '[Todo] editar todo',
    props<{id:number, texto: string }>()
    );
export const borrar = createAction(
  '[Todo] borrar todo',
  props<{id:number   }>()
  );
  export const togggleAll = createAction(
    '[Todo] llenar todo',
    props<{completado:boolean   }>()
    );

    export const limpiarTodos = createAction('[Todo] limpiar todo' );

