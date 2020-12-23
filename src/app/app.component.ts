import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordChecker } from './custom-vaidators/password-checker';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: PasswordChecker('password', 'confirmPassword')
    })
  }

  get form(){ return this.registerForm.controls };

  onSubmit() {
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }

    console.table(this.registerForm.value);

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
