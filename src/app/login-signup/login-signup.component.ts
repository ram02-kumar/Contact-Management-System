import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { login, signup } from '../contactmodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  signupForm!:FormGroup;
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient,private toastr: ToastrService,private router:Router){}
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  isShow:boolean=false;

  signup(){
    this.isShow=true;
  }
  login(){
    this.isShow=false;
  }

  submit(){
    this.http.post<signup>("http://localhost:3000/signup",this.signupForm.value).subscribe((response:any) =>{
      this.toastr.success("User Created Successfully !!!");
      this.signupForm.reset();
    })
  }

  loginuser(){
    this.http.get<login>("http://localhost:3000/signup").subscribe((res:any) =>{

      //matching email and password
      const userValid=res.find((data:any) =>{
        return data.email ===  this.loginForm.value.email && data.password === this.loginForm.value.password
      })

      if(userValid){
        this.toastr.success("successfully logged in !!!")
        this.loginForm.reset();
        this.router.navigate(['/contactList'])
        localStorage.setItem('loginUser',JSON.stringify(userValid))
      }
      else{
        this.toastr.error("User not found with this credentials")
        this.loginForm.reset();
      }
    })
  }

}
