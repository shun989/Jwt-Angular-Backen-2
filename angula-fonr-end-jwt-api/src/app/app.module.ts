import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/layouts/master/master.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenuLeftComponent } from './components/layouts/admin/menu-left/menu-left.component';
import {DashboardComponent} from "./components/layouts/admin/dashboard/dashboard.component";
import {NavbarDashboardComponent} from "./components/layouts/admin/navbar-dashboard/navbar-dashboard.component";
import {FooterDashboardComponent} from "./components/layouts/admin/footer-dashboard/footer-dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import { ModalComponent } from './components/layouts/admin/modal/modal.component';
import {AuthInterceptor} from "./shared/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    MenuLeftComponent,
    NavbarDashboardComponent,
    FooterDashboardComponent,
    HomeComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
