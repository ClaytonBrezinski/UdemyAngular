import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TimeStampComponentComponent } from './time-stamp-component/time-stamp-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeStampComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
