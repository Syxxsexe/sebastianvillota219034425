import { Component } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-nombre-ycontacto',
  standalone: true,
  imports: [ ReactiveFormsModule, ButtonModule, CommonModule, InputTextModule, CardModule, CalendarModule],
  templateUrl: './nombre-ycontacto.component.html',
  styleUrl: './nombre-ycontacto.component.css'
})
export class NombreYContactoComponent {
contactoForm: FormGroup;

constructor(private fb: FormBuilder){

this.contactoForm = this.fb.group({

  name: ['', Validators.required],
  lastname: ['', Validators.required],
  email:['', [Validators.required, Validators.email]],
  numberphone: ['',[Validators.required, Validators.minLength(10)]],


})

}


onSubmit(){
  if(this.contactoForm.value){
  console.log(this.contactoForm);
  }else{
  console.log("Formulario Invalido");
  }
  }
  
}
