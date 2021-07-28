import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../shared/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister !: FormGroup;
  message:string|undefined;
  userModelObj: User = new User();

  error_messages = {
    'name': [
      {type: 'required', message: 'User Name is required.'},
      {type: 'minlength', message: 'User Name min length.'},
      {type: 'maxlength', message: 'User Name max length.'},
    ],
    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'email', message: 'Email  wrong!'},
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password min length.'},
      {type: 'maxlength', message: 'Password max length.'},
    ],
    'confirmPassword': [
      {type: 'required', message: 'Confirm Password is required.'},
      {type: 'minlength', message: 'Confirm Password min length.'},
      {type: 'maxlength', message: 'Confirm Password max length.'},
    ],
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: new FormControl ('', [
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
    },{
      validators: this.passwordMatch.bind(this)
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.formRegister.controls; }

  submitRegister():void {

    this.userModelObj.name = this.formRegister.value.name;
    this.userModelObj.password = this.formRegister.value.password;
    // @ts-ignore
    this.userModelObj.password_confirmation = this.formRegister.value.confirmPassword;
    this.userModelObj.email = this.formRegister.value.email;

    this.authService.createUser(this.userModelObj).subscribe(res =>{
        this.message = res.message
        console.log(this.message)
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formRegister.reset();
        this.router.navigate(['../login']);
      },
      error => {
        this.message = error.error
      })
  }

  passwordMatch(formGroup: FormGroup) {
    // @ts-ignore
    const {value: password} = formGroup.get('password');
    // @ts-ignore
    const {value: confirmPassword} = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  get name(){
    return this.formRegister?.get('name')
  }

  get email(){
    return this.formRegister?.get('email')
  }

  get password(){
    return this.formRegister?.get('password')
  }
  get confirmPassword(){
    return this.formRegister?.get('confirmPassword')
  }

}

