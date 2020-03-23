import { Routes } from '@angular/router';
import { ServicesComponent } from './services.component';

export const servicesRoutes: Routes = [
    {
        //localhost:4200/
        path: '', component: ServicesComponent, children: [
            //localhost:4200/front-end
            { path: '', redirectTo: 'data', pathMatch: 'full' },
            //localhost:4200/front-end/home
            { path: 'data', loadChildren: './data/data.module#DataModule' }

        ]
    }
];

