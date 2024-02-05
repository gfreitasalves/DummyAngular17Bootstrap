import { Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: ProductComponent
            }
        ]
    }

];
