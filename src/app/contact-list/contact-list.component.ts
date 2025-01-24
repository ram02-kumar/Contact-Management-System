import { Component } from '@angular/core';
import { ApiService } from 'src/Service/api.service';
import { contact } from '../contactmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  data!:contact[];
  searchText:any;
  isLoading:boolean= true;
  constructor(private service:ApiService,private toastr: ToastrService){}

  ngOnInit() {
    this.getContact()
  }

  getContact(){
  setTimeout(()=>{
    this.service.getContactList().subscribe((response:any) =>{
      console.log("response",response);
      this.data=response;
      this.isLoading=false;
    })
  },2000)
  }
  
  delete(id:any){
    this.service.deleteContact(id).subscribe((res:any) =>{
      console.log(res);
      this.toastr.success("contact deleted successfully !!!")
      this.getContact();
    })
  }   
  logout(){
    localStorage.clear();
  }


}
