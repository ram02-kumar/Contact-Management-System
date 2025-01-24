import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from 'src/app/contactmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //post method
  addContact(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts",data)
  }

  //get method
  getContactList(){
    return this.http.get<contact>("http://localhost:3000/posts")
  }

    //delete method
  deleteContact(id:any){
    return this.http.delete<contact>("http://localhost:3000/posts/" + id)
  }

  //fetch data on edit method
  fetchContact(id:any){
    return this.http.get<contact>("http://localhost:3000/posts/" + id)
  }

  //update data
  updateContact(id:any,data:contact){
    return this.http.put<contact>("http://localhost:3000/posts/" +id,data)

  }


}
