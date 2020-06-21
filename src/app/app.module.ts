import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobSubmissionComponent } from './jobs/job-submission/job-submission.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobApplicationsComponent } from './jobs/job-applications/job-applications.component';
import { JobApplicationComponent } from './jobs/job-application/job-application.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    JobSubmissionComponent,
    JobApplicationsComponent,
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
