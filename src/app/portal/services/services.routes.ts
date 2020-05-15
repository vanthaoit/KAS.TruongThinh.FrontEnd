import { Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { DataModule } from './data/data.module';
import {DataComponent} from './data/data.component';
import {MechanicalModule} from './mechanical/mechanical.module'
import {DetailsModule} from './details/details.module';
import {BusinessModule} from './business/business.module';


export const servicesRoutes: Routes = [
    {
        //localhost:4200/
        path: '', component: ServicesComponent, children: [
            //localhost:4200/front-end
            { path: '', redirectTo: 'data', pathMatch: 'full' },
            //localhost:4200/front-end/home
            { path: 'data', loadChildren: './data/data.module#DataModule' },
            { path: 'mechanical', loadChildren: './mechanical/mechanical.module#MechanicalModule' },
             { path: 'business', loadChildren: './business/business.module#BusinessModule' },
             { path: 'details', loadChildren: './details/details.module#DetailsModule' },
            // { path: 'details', loadChildren: () =>DetailsModule }
            //{ path: 'mechanical', loadChildren: () =>MechanicalModule }

        ]
    }


];

