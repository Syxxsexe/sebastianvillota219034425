import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule,FormGroupDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private Fb: FormBuilder){}

  loginform= this.Fb.group;



}
