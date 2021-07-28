import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "../../components/home/product/product.component";
import {CategoryComponent} from "../../components/home/category/category.component";
import {UserProfileComponent} from "../../components/home/user-profile/user-profile.component";

const routes: Routes = [
    {
      path: '',
      component: ProductComponent
    },
    {
      path: 'categories',
      component: CategoryComponent
    },
    {
      path: 'user',
      component: UserProfileComponent
    }
];

@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
