import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "../../../components/admin/category/category-list/category-list.component";
import {CategoryAddComponent} from "../../../components/admin/category/category-add/category-add.component";
import {CategoryEditComponent} from "../../../components/admin/category/category-edit/category-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'add',
    component: CategoryAddComponent
  },
  {
    path: ':id/edit',
    component: CategoryEditComponent
  }
]

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
