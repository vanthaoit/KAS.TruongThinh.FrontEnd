import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end.component';
import { frontEndRoutes } from './front-end.routes';

import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ServicesModule,
    ContactModule,
    RouterModule.forChild(frontEndRoutes)
  ],
  declarations: [FrontEndComponent]
})
export class FrontEndModule { }
