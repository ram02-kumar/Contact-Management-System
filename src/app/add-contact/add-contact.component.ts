import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/Service/api.service';
import { contact } from '../contactmodel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent  {

    contactForm!:FormGroup;

    constructor(private formbuilder:FormBuilder,private apiService:ApiService,private router:Router,private toastr: ToastrService){}

    ngOnInit(){
      this.contactForm = this.formbuilder.group({
        Firstname:['',Validators.required],
        Lastname:['',Validators.required],
        Email:['',Validators.required],
        PhoneNumber:['',Validators.required],
        City:['',Validators.required]

      })
    }

    submitContact(data:contact){
      console.log("Contact Form",this.contactForm.value);
      this.apiService.addContact(data).subscribe((res:any) =>{
        this.contactForm.reset();
        this.router.navigate(['/contactList'])
        this.toastr.success("Contact Update Successfully !!!")
      })
     
      
    }



}
