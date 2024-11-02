import { Component } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-datos-gerente',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CommonModule, InputTextModule, CardModule, CalendarModule],
  templateUrl: './datos-gerente.component.html',
  styleUrl: './datos-gerente.component.css'
})
export class DatosGerenteComponent {

gerenteForm : FormGroup;

constructor(private fb: FormBuilder){

  this.gerenteForm = this.fb.group({
  
    name: ['', Validators.required],
    email:['', [Validators.required, Validators.email]],
  
  
  })
  
  }
  
  
  onSubmit(){
    if(this.gerenteForm.value){
    console.log(this.gerenteForm);
    }else{
    console.log("Formulario Invalido");
    }
    }
    

}
