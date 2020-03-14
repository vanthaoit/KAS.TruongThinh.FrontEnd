import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../main/user/user.module';
import {portalRoutes} from './portal.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(portalRoutes)
    
  ],
  declarations: [PortalComponent]
})
export class PortalModule { }
