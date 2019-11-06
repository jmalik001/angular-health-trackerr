import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NewEntryComponent,
    LoginComponent,
    EntryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path : 'home', component: HomeComponentComponent},
      {path : 'login', component: LoginComponent},
      {path : 'entries/:id', component: EntryDetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
