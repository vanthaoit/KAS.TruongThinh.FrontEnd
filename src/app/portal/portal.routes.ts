import { Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import {IndexModule} from './index/index.module';
import {AboutModule} from './about/about.module';
import {ServicesModule} from './services/services.module';
import {ContactModule} from './contact/contact.module';

export const portalRoutes: Routes = [
    {
          //localhost:4200/
          path: '', component: PortalComponent, children: [
            //localhost:4200/front-end
            { path: '', redirectTo: 'about', pathMatch: 'full' },
            //localhost:4200/front-end/home
            { path: 'index', loadChildren: './index/index.module#IndexModule' },

            { path: 'about', loadChildren: './about/about.module#AboutModule' },

            { path: 'services', loadChildren: './services/services.module#ServicesModule' },

            { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }

        ]
    }
];

