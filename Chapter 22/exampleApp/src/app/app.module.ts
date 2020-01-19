import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { MessageModule } from './messages/message.module';
import { MessageComponent } from './messages/message.component';
import {TermsGuard} from './terms.guard';
import {LoadGuard} from './load.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule,
    MessageModule
  ],
  providers: [
    TermsGuard,
    LoadGuard
  ],
  bootstrap: [
    AppComponent,
    // TableComponent,
    // FormComponent,
    // MessageComponent
  ]
})
export class AppModule { }
