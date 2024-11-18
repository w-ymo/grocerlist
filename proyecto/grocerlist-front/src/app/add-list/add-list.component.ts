import { Component, Inject, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListasService } from '../services/list-service/listas.service';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/list';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [FormBuilder, Inject, ListasService, HttpClient],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.scss'
})
export class AddListComponent {

  list: List = new List();

  formBuilder = new FormBuilder();
  
  httpClient = inject(HttpClient);

  listService = new ListasService(this.httpClient);


  addForm = this.formBuilder.group({
    name: 'addForm'
  });

  add(): void{
    this.list.nombreLista = this.addForm.get('listName')?.getRawValue();
    this.listService.insertList(this.list);
  }

}
