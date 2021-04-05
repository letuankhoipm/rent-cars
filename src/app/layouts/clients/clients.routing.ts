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
                loadChildren: "../../routes/home/home.module#HomeModule"
            },
            {
                path: 'about-me',
                loadChildren: "../../routes/about-me/about-me.module#AboutMeModule"
            },
            {
                path: 'porfolio',
                loadChildren: "../../routes/porfolio/porfolio.module#PorfolioModule"
            },
            {
                path: 'check-out',
                loadChildren: "../../routes/check-out/check-out.module#CheckOutModule"
            },
        ]
    }
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
