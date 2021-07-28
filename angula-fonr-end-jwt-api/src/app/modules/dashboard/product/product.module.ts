import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "../../../components/admin/product/product-list/product-list.component";
import {ProductAddComponent} from "../../../components/admin/product/product-add/product-add.component";
import {ProductEditComponent} from "../../../components/admin/product/product-edit/product-edit.component";
import {ProductDetailComponent} from "../../../components/admin/product/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: ':id/edit',
    component: ProductEditComponent
  },
  {
    path: ':id/detail',
    component: ProductDetailComponent
  }
]
@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
