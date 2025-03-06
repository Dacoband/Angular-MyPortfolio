import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Dacoban's Portfolio`,
    }
];
