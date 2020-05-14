import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  {
    path: '', component: AppComponent
    , children: [
      {
        path: 'job', children: [
          { path: ':id', component: JobDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
