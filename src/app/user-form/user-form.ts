import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
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

  //TODO: Toast
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log("Submit successful");
    }
    else {console.log('Form is invalid')} 
  }
}
