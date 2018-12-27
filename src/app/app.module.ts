import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { InstallationComponent } from './installation/installation.component';
import { ConductComponent } from './conduct/conduct.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    ObservablesComponent,
    SubscriptionComponent,
    SubjectComponent,
    InstallationComponent,
    ConductComponent,
    DeprecationsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
