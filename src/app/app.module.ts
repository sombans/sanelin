import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LeyoutComponent } from './components/leyout/leyout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FilterPipe } from './pipes/filter.pipe';
import {ContactsService} from './services/contacts.service';
const appRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsListComponent },
  {
    path: 'messages',
    component: MessagesComponent,
    data: { title: 'Messages' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    LeyoutComponent,
    NavBarComponent,
    MessagesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
