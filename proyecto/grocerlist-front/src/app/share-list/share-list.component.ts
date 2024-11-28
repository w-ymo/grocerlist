import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ListasService } from '../services/list-service/listas.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShareList } from '../models/list';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-share-list',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
  templateUrl: './share-list.component.html',
  styleUrl: './share-list.component.scss'
})
export class ShareListComponent {

  shareReq: ShareList;

  shareForm = this.formBuilder.group({
    nombreUsuario: ['', [Validators.required]],
  });

  get nombreUsuario() {
    return this.shareForm.controls.nombreUsuario;
  }

  constructor(private listService: ListasService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ShareListComponent>) {
  }



  addList() {
    if (this.shareForm.valid) {
      this.shareReq = {
        idLista: sessionStorage.getItem("currentList") as unknown as number,
        username: this.nombreUsuario.value as string
      }
      this.listService.shareList(this.shareReq).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (errorData) => {
          //this.errorMessage = errorData;
          console.warn(errorData)
        },
        complete: () => {
          this.dialogRef.close();
        }
      });
    } else {
      this.shareForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }


}
