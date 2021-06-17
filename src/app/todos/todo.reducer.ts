import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.models';


export const EstadoIncial:Todo[]= [
  new  Todo("prueba de todo"),
  new  Todo("ejemplo"),
  new  Todo("prueba 2"),

];

const _todoReducer = createReducer(
  EstadoIncial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, {id}) => state.filter(todo=>todo.id!==id)),
  on(actions.limpiarTodos, state  => {
    return state.filter(todo=>!todo.completado)
  }),

  on(actions.completado, (state, {id}) => {
    return state.map(todo=>{
      if (todo.id==id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo
      }

    })
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo=>{
      if (todo.id==id) {
        return {
          ...todo,
         texto: texto
        }
      }else{
        return todo
      }

    })
  }),
  on(actions.togggleAll, (state, {completado}) => {
    return state.map(todo=>{

        return {
          ...todo,
          completado: completado
        }


    })
  }),
);



export function todoReducer(state= EstadoIncial, action: Action) {
  return _todoReducer(state, action);
}
