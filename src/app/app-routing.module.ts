import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'contactList',component:ContactListComponent},
  {path:'addcontact',component:AddContactComponent},
  {path:'updateContact/:id',component:UpdateContactComponent},  
  {path:'login-signup',component:LoginSignupComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
