import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/Service/api.service';
import { contact } from '../contactmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  constructor(private service:ApiService,private activatedRoute:ActivatedRoute,private toastr: ToastrService,private router:Router){}
  contactId:any='';
  contactData:contact={} as contact;
  ngOnInit():void{
    this.activatedRoute.params.subscribe((params:any) =>{
      console.log(params)
      this.contactId=params['id'];
  })

      this.service.fetchContact(this.contactId).subscribe((data:contact) =>{
        console.log("data *",data);
        this.contactData = data;

      })
  }

  update(){
    this.service.updateContact(this.contactId,this.contactData).subscribe((res:any) =>{
      console.log("update response", res)
      this.toastr.success("contact Updated successfully !!!");
      this.router.navigate(['/contactList'])
    })
  }

}
