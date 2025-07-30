import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
constructor(private fb: FormBuilder){}

  //Nombre
  // Correo electrónico
  // Número de teléfono
  // Dirección
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    address: this.fb.group({
      street: [],
      suite: [],
      city: [],
      zipcode: [],
      geo: this.fb.group({
        lat: [],
        lng: []
      })
    })
  })  

  onSubmit() {
    if (this.userForm.valid) { console.log(this.userForm.value)}
    else {console.log()}
  }
}
