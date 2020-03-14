import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [

    {
        path: '', component: MainComponent, children: [

            { path: '', redirectTo: 'product', pathMatch: 'full' },

            { path: 'home', loadChildren: './home/home.module#HomeModule' },

            { path: 'user', loadChildren: './user/user.module#UserModule' },

            { path: 'role', loadChildren: './role/role.module#RoleModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' }
        ]
    }

];