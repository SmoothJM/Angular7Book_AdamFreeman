import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { NotFoundComponent } from './core/notFound.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';

const childRoutes: Routes = [
  {path: 'products', component: ProductCountComponent},
  {path: 'categories', component: CategoryCountComponent},
  {path: '', component: ProductCountComponent},
];

const routes: Routes = [
  // { path: 'form/edit', component: FormComponent },
  // { path: 'form/create', component: FormComponent },
  { path: 'form/:mode/:id', component: FormComponent },
  { path: 'form/:mode', component: FormComponent },
  { path: 'does', redirectTo: '/form/create', pathMatch: 'prefix' },
  { path: 'table', component: TableComponent, children: childRoutes },
  { path: 'table/:category', component: TableComponent, children: childRoutes },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
