import { Component } from '@angular/core';
import { Jsonplaceholder, userData } from '../jsonplaceholder';
import { Observable, of} from 'rxjs';
import { UserForm } from '../user-form/user-form';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    UserForm],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  // Using observables to storage data
  singleUserDataRetrieval$: Observable<userData> = of();
  getDataFirstFiveUsers$: Observable<userData[]> = of([]);
  constructor(private jsonplaceholder: Jsonplaceholder){}

   //TODO --> What if user ID is not found?
  getDataFromSingleUser(){ 
    const inputElement = document.getElementById('value_id') as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    console.log("Getting data from single user...")
    console.log("ID: ", value)
    this.singleUserDataRetrieval$ = this.jsonplaceholder.getSingleUserData(value);
    this.singleUserDataRetrieval$.subscribe((data)=> {
      console.log("Data: ", data);
    })   
  }

  // TODO --> What if one user ID is not found?
  getDataFirstFiveUsers() {
    console.log("Getting data from first five users...")
    var cont: number = 0;
    var var_user: number = 1;

    while (cont<5) {
      this.singleUserDataRetrieval$ = this.jsonplaceholder.getSingleUserData(var_user);
      this.singleUserDataRetrieval$.subscribe((data)=> {
      console.log("Data: ", data);
    });
    cont = cont + 1;
    var_user = var_user + 1; 
    }
  }
}
