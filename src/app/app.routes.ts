import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DocsComponent } from './docs/docs.component';
import { BalancesComponent } from './balances/balances.component';

export const routes: Routes = [
    { path: '', component: DashComponent },
    { path: 'balances', component: BalancesComponent },
    { path: 'docs', component: DocsComponent },
];
