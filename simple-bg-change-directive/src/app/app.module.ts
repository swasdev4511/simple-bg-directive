import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SetBackgroundDirective } from './shared/set-background.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    SetBackgroundDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
