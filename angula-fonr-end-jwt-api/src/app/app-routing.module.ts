import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {MasterComponent} from "./components/layouts/master/master.component";
import {AuthGuard} from "./shared/auth.guard";
import {DashboardComponent} from "./components/layouts/admin/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    component: HomeComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ],
    canActivate: [AuthGuard]
  },

  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./modules/dashboard/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./modules/dashboard/category/category.module').then(m => m.CategoryModule)
      }
    ],
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
