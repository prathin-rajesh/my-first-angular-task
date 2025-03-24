import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';
import { AdminEnquiriesComponent } from './components/admin-enquiries/admin-enquiries.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'enquiries',
    component: EnquiriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/enquiries',
    component: AdminEnquiriesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
