import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { completado, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()  todo: Todo = new Todo("");
   chkCompletado: FormControl = new FormControl;
   txtinput: FormControl = new FormControl;
   editando: boolean = false;
  @ViewChild('inputfisico')  txtfisico: ElementRef = new ElementRef(null);

  constructor(private store: Store<AppState>) {
    console.log(this.todo)


  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtinput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor=>{
      this.store.dispatch(completado({id: this.todo.id}))
    }
      )
  }

  editar(){
    console.log('entro')
    this.editando = true;
    this.txtinput.setValue(this.todo.texto)
    this.txtfisico.nativeElement.select();
  }

  teminarEdicion(){
    this.editando = false;
    if (this.txtinput.valid) {
      this.store.dispatch(editar({id:this.todo.id, texto: this.txtinput.value}))
    }

  }

  borrar(){
    this.store.dispatch(borrar({id: this.todo.id}))
  }


}
