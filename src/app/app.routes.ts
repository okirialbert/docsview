import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DocsComponent } from './docs/docs.component';
import { BalancesComponent } from './balances/balances.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { EsignComponent } from './esign/esign.component';
import { RepsComponent } from './reps/reps.component';


export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: NavComponent,  // this is the component with the <router-outlet> in the template
        children: [
            {
                path: 'balances',  // child route path
                title: 'Balances',
                component: BalancesComponent,  // child route component that the router renders
            },
            {
                path: 'ministry',  // child route path
                title: 'Balances',
                component: DashComponent,  // child route component that the router renders
            },
        ],
    },
    { path: '', component: EsignComponent },
    { path: 'reps', component: RepsComponent },
    { path: 'docs', component: DocsComponent },
];