import { Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

export const portalRoutes: Routes = [
    // {
    //     path: '', component: PortalComponent
    // }
    
    {
    //localhost:4200/
    path: '', component: PortalComponent, children: [
        //localhost:4200/front-end
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        //localhost:4200/front-end/home
        { path: 'index', loadChildren: './index/index.module#IndexModule' },
        //localhost:4200/front-end/services
        { path: 'services', loadChildren: './services/services.module#ServicesModule' },

        { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }

    ]}
];

