import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuBarComponent } from './components/app-menu-bar/app-menu-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ApiService } from './services/api.service';
import { AdminEnquiriesComponent } from './components/admin-enquiries/admin-enquiries.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuBarComponent,
    LoginComponent,
    EnquiriesComponent,
    ProjectsComponent,
    AdminEnquiriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, AuthGuard, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
