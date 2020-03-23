import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {DataComponent} from './data.component';

export const dataRoutes:Routes =[
  {path:'',redirectTo:'infor',pathMatch:'full'},
  {path:'infor',component:DataComponent}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes)
  ],
  declarations: [DataComponent]
})
export class DataModule { }
