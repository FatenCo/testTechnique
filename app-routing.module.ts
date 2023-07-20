import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';


const routes: Routes = [
  {path :"", component:HomeComponent},
  {path :"addProduct", component:AddProductComponent},
  {path :"dashboardAdmin", component:DashboardAdminComponent},
  {path:'editProduct/:id',component: AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
