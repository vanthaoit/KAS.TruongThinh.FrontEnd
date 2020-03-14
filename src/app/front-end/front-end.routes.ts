import { Routes } from '@angular/router';
import { FrontEndComponent } from './front-end.component';

export const frontEndRoutes: Routes = [

    {
        //localhost:4200/
        path: '', component: FrontEndComponent, children: [
            //localhost:4200/front-end
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //localhost:4200/front-end/home
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            //localhost:4200/front-end/services
            { path: 'services', loadChildren: './services/services.module#ServicesModule' },

            { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }


        ]
    }

]