import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DocsComponent } from './docs/docs.component';
import { BalancesComponent } from './balances/balances.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { EsignComponent } from './esign/esign.component';
import { RepsComponent } from './reps/reps.component';
import { KcbReqComponent } from './pages/kcb-req/kcb-req.component';
import { PreTphcComponent } from './pages/pre-tphc/pre-tphc.component';
import { AuthToRelComponent } from './pages/auth-to-rel/auth-to-rel.component';
import { TripatriateComponent } from './pages/tripatriate/tripatriate.component';
import { OmcRelComponent } from './pages/omc-rel/omc-rel.component';
import { ThirdPComponent } from './pages/third-p/third-p.component';


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
    { path: 'kcb-req', component: KcbReqComponent },
    { path: 'pre-tphc', component: PreTphcComponent },
    { path: 'auth-to-rel', component: AuthToRelComponent },
    { path: 'trip', component: TripatriateComponent },
    { path: 'omc-rel', component: OmcRelComponent },
    { path: 'third-p', component: ThirdPComponent },
];