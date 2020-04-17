import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {DataComponent} from './data.component';
import {HttpProviderService} from '../../../core/services/http-provider.service';

export const dataRoutes:Routes =[

  { path: '', component: DataComponent}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes)
  ],
  declarations: [DataComponent],
  providers:[HttpProviderService]
})
export class DataModule { }
