import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
        title: `Dacoband's Portfolio`,
    },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Dacoban's Portfolio`,
    }
];
