import { SearchComponent } from './Pages/search/search.component';
import { CreateProductComponent } from './Pages/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { UpdateProductComponent } from './Pages/update-product/update-product.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:category',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
