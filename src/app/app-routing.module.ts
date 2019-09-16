import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingComponent } from './components/home/setting/setting.component';

import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/products/category/category.component';
import { ListComponent } from './components/products/list/list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'setting', component: SettingComponent },
      { path: '**', redirectTo: 'welcome' },
    ]
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: 'category' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
