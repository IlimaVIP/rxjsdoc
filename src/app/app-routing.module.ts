import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { InstallationComponent } from './installation/installation.component';
import { ConductComponent } from './conduct/conduct.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { TeamComponent } from './team/team.component';
import { MigrationComponent } from './migration/migration.component';
import { CoreteamComponent } from './coreteam/coreteam.component';
import { LearningteamComponent } from './learningteam/learningteam.component';
import { AlumnComponent } from './alumn/alumn.component';
import { ContributorsComponent } from './contributors/contributors.component';

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
  },
  {
    path: 'conduct',
    component: ConductComponent
  },
  {
    path: 'deprecations',
    component: DeprecationsComponent
  },
  {
    path: 'team',
    component: TeamComponent,
    children: [
      {
        path: '',
        component: CoreteamComponent
      },
      {
        path: 'learningteam',
        component: LearningteamComponent
      },
      {
        path: 'alumn',
        component: AlumnComponent
      },
      {
        path: 'contributors',
        component: ContributorsComponent
      }
    ]
  },
  {
    path: 'migration',
    component: MigrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
