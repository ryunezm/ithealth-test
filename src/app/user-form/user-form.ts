import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
//import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
    userForm: FormGroup;

    constructor(private fb: FormBuilder){
      this.userForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
      })  
    }

  onSubmit() {
    if (this.userForm.valid) { console.log(this.userForm.value)}
    else {console.log('Form is invalid')} //TODO: Toast
  }
}
