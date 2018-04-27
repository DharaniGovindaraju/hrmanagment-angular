import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ RouterModule } from '@angular/router';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http'



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { SetgoalComponent } from './setgoal/setgoal.component';
import { ReportComponent } from './report/report.component';
import { UpdatetrainingComponent } from './updatetraining/updatetraining.component';
import { ViewlogComponent } from './viewlog/viewlog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    NavbarComponent,
    AddresourceComponent,
    ApplyleaveComponent,
    SetgoalComponent,
    ReportComponent,
    UpdatetrainingComponent,
    ViewlogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full', redirectTo:'login'},
      {path:'login', component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'applyleave', component:ApplyleaveComponent},
      {path:'addresource', component:AddresourceComponent},
      {path:'setgoal', component:SetgoalComponent},
      {path:'report',component:ReportComponent},
      {path:'updatetraining', component:UpdatetrainingComponent},
      {path:'viewlog', component:ViewlogComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
