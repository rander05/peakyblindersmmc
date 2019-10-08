import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpbComponent } from './mainpb/mainpb.component';
import { NavbarpbComponent } from './navbarpb/navbarpb.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpbComponent,
    NavbarpbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
