import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from './filter.pipe';
import { PageLoaderComponent } from './page-loader/page-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    UpdateContactComponent,
    LoginSignupComponent,
    PagenotfoundComponent,
    FilterPipe,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
