import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: '',
                loadChildren: '../../routes/home/home.module#HomeModule'
            },
            {
                path: 'check-out',
                loadChildren: '../../routes/check-out/check-out.module#CheckOutModule'
            },
            {
                path: 'porfolio',
                loadChildren: '../../routes/porfolio/porfolio.module#PorfolioModule'
            },
        ]
    },
    {
        path: 'login',
        loadChildren: '../../routes/login/login.module#LoginModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class ClientsRoutingModule { }
