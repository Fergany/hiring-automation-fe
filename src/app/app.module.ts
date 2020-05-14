import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobDetailsService } from './jobs/job-details/job-details.service';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JobDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
