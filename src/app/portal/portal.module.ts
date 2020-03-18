import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../main/user/user.module';
import {portalRoutes} from './portal.routes';
import { FormsModule } from '@angular/forms';
import {HeaderMenuComponent} from '../shared/header-menu/header-menu.component';
import {NavigationMenuComponent} from '../shared/navigation-menu/navigation-menu.component';
import {BottomMenuComponent} from '../shared/bottom-menu/bottom-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(portalRoutes)
    
  ],
  declarations: [PortalComponent,HeaderMenuComponent,NavigationMenuComponent,BottomMenuComponent]
})
export class PortalModule { }
