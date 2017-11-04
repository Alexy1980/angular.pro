import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UsernameValidators} from "./username.validator";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('^[_a-zA-Z0-9а-яА-Я ]+$'),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
