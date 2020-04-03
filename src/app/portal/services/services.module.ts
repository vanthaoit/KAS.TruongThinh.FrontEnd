import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { FormsModule } from '@angular/forms';
import {SidebarMenuComponent} from '../../shared/sidebar-menu/sidebar-menu/sidebar-menu.component';
import {RelatedComponent} from '../../shared/related/related.component';
import {RouterModule} from '@angular/router';
import {servicesRoutes} from './services.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: [ServicesComponent,SidebarMenuComponent,RelatedComponent],
  exports:[RouterModule]
})
export class ServicesModule { }
