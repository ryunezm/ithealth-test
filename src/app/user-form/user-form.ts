import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userForm: FormGroup;

  // Inject FormBuilder and Toastr Service
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  onSubmit() {
    // Print data in console and show a toast
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      console.log("Submit successful");
      this.toastr.success("Submit successful");
    }
    // This is not necessary, but just in case...
    else {
      console.log('Form is invalid');
      this.toastr.error("Form is invalid", "", {timeOut: 3000});
    }
  }
}
