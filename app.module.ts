import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import routes, { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SpeakerLoginComponent } from './speaker-login/speaker-login.component';
import { ParticipantLoginComponent } from './participant-login/participant-login.component';
import { RouterModule } from '@angular/router';
import { AdminauthService } from './admin-login/adminauth.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeakerDashboardComponent } from './speaker-dashboard/speaker-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ParticipantDashboardComponent } from './participant-dashboard/participant-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SpeakerLoginComponent,
    ParticipantLoginComponent,
    SpeakerDashboardComponent,
    AdminDashboardComponent,
    ParticipantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AdminauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
