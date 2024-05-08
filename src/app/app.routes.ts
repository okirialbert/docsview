import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DocsComponent } from './docs/docs.component';

export const routes: Routes = [
    { path: 'dash', component: DashComponent },
    { path: 'docs', component: DocsComponent },
];
