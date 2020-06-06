import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobSubmissionComponent } from './jobs/job-submission/job-submission.component';
@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    JobSubmissionComponent
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
