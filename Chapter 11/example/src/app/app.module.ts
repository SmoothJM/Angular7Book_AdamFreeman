import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { PaAttrDirective } from './attr.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";

import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { ProductTableCoponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView} from './toggleView.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaAttrDirective,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableCoponent,
    ProductFormComponent,
    PaToggleView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent
    ProductComponent
  ]
})
export class AppModule { }
