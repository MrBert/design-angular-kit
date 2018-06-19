import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesignAngularKitModule } from 'projects/design-angular-kit/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';
import { TableOfContentItemComponent } from './table-of-content-item/table-of-content-item.component';
import { RouterDispatcherComponent } from './router-dispatcher/router-dispatcher.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOfContentComponent,
    TableOfContentItemComponent,
    RouterDispatcherComponent
  ],
  imports: [
    BrowserModule,
    DesignAngularKitModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
