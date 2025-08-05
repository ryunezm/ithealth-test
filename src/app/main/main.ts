import {Component} from '@angular/core';
import {Jsonplaceholder, userData} from '../jsonplaceholder';
import {Observable, of} from 'rxjs';
import {UserForm} from '../user-form/user-form';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

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

  constructor(private jsonplaceholder: Jsonplaceholder) {
  }

  /**
   * Get data for a single user based on the entered ID
   */
  getDataFromSingleUser() {
    const inputElement = document.getElementById('value_id') as HTMLInputElement;
    const value = inputElement.valueAsNumber;
    console.log("Getting data from single user...");
    console.log("ID: ", value);

    // Call to the service to obtain user data
    this.singleUserDataRetrieval$ = this.jsonplaceholder.getSingleUserData(value);
    this.singleUserDataRetrieval$.subscribe({
      next: (data) => console.log("Data: ", data),
      error: (err) => console.warn(`User ID ${value} not found.`, err)
    });
  }

  /**
   * Get data from the first 5 available users (sequential handling with subscriptions)
   */
  getDataFirstFiveUsers() {
    console.log("Getting data from first five users...")
    var cont: number = 0; // Counter of users found
    var var_user: number = 1; // Initial user ID

    while (cont < 5) {
      try {
        this.singleUserDataRetrieval$ = this.jsonplaceholder.getSingleUserData(var_user);
        this.singleUserDataRetrieval$.subscribe((data) => {
          console.log("Data: ", data);
        });
        cont = cont + 1;

      } catch (error) {
        console.warn(`User ID ${var_user} not found. Skipping...`);
      }
      var_user = var_user + 1;
    }
  }
}
