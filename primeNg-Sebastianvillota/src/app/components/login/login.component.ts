import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControlName, } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule,ButtonModule,PasswordModule, CommonModule, DropdownModule, CalendarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userForm: FormGroup;
  

constructor(private fb: FormBuilder, private loginService: LoginService){

this.userForm = this.fb.group({

  name: ['', Validators.required],
  email:['', [Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(6)]],

});
}

onSubmit(){
if(this.userForm.valid){
  const {email,password} = this.userForm.value;
  this.loginService.login(email, password).subscribe(Response =>{console.log("Exitoso", Response)})
console.log(this.userForm);
}else{
console.log("Formulario Invalido");
}
}


}
