import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { InstallationComponent } from './installation/installation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'overview/observables',
    component: ObservablesComponent
  },
  {
    path: 'overview/subscription',
    component: SubscriptionComponent
  },
  {
    path: 'overview/subject',
    component: SubjectComponent
  },
  {
    path: 'installation',
    component: InstallationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
