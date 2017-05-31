import 'hammerjs';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material.module/material.module';
import {View1Component} from './view1.component/view1.component';
import {View2Component} from './view2.component/view2.component';
@NgModule({
  imports:      [
     BrowserModule,
     BrowserAnimationsModule,
     CustomMaterialModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot([
        {
          path: 'view1',
          component:View1Component
        },
        {
          path: 'view2',
          component:View2Component
        },
     ]) ],
  declarations: [ AppComponent,
  View1Component,
  View2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
