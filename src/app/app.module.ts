import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatSelectModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { ReserveComponent } from './reserve/reserve.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DishTableComponent } from './dish-table/dish-table.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200
  { path: 'carte', component: CarteComponent },  // http://localhost:4200/carte
  { path: 'reserve', component: ReserveComponent },  // http://localhost:4200/reserve
  { path: 'schedule', component: ScheduleComponent },  // http://localhost:4200/schedule
  { path: 'contact', component: ContactComponent }  // http://localhost:4200/contact
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ContactComponent,
    ReserveComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
