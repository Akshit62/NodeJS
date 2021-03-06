import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {userRoutes} from './user.routes';
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent,LoginComponent]
})
export class UserModule { }
