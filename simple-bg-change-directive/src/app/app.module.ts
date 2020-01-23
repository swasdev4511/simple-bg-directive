import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { SetBackgroundDirective } from './shared/set-background.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    SetBackgroundDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
