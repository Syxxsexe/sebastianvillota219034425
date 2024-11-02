import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-licencia',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, CalendarModule, ButtonModule, CommonModule],
  templateUrl: './detalles-licencia.component.html',
  styleUrl: './detalles-licencia.component.css'
})
export class DetallesLicenciaComponent {

  detallesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detallesForm = this.fb.group({
      firstdate: ['', Validators.required],
      lastdate: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.detallesForm.valid) {
      console.log(this.detallesForm.value);
    } else {
      console.log('Formulario no valido');
    }
  }

}
