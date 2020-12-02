

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './admin/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './admin/user/add/add.component';
import { FormsModule } from '@angular/forms';
import { ViewUserComponent } from './admin/user/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    UserComponent,
    AddComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
