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
            // {
            //     path: 'place',
            //     loadChildren: "../../routes/place/place.module#PlaceModule"
            // }
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
