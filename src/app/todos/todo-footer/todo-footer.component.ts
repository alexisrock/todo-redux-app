import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroactual: filtrosValidos="todos";
  filtros: filtrosValidos[]=['todos','completados','pendientes'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro=> this.filtroactual = filtro )
    this.store.subscribe(state=> {
      this.filtroactual = state.filtro;
      this.pendientes = state.todos.filter(todo=>!todo.completado).length;
    });

  }
  cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFiltro({filtro: filtro}));
  }

  limpiarCompletados(){
    this.store.dispatch(limpiarTodos());
  }

}
