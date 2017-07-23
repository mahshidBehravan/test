import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule,
              StoreModule

    ],
   
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
