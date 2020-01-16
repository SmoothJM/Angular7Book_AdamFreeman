import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// import { PaAttrDirective } from './attr.directive';
// import { PaStructureDirective } from './structure.directive';
// import { PaIteratorDirective } from "./iterator.directive";
// import { PaCellColor } from "./cellColor.directive";
// import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";

// import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { ProductTableComponent } from './component/productTable.component';
import { ProductFormComponent } from './component/productForm.component';
// import { PaToggleView} from './toggleView.component';
// import { PaAddTaxPipe } from './addTax.pipe';
// import { PaCategoryFilterPipe } from './categoryFilter.pipe';
// import { PaDiscountDisplayComponent } from './discountDisplay.component';
// import { PaDiscountEditorComponent } from './discountEditor.component';
// import { PaDiscountPipe } from './dicount.pipe';
// import { PaDiscountAmountDirective } from './discountAmount.directive';


// import { DiscountService } from './discount.service';
// import { Model } from './repository.model';
// import { SimpleDataSource } from './datasource.model';
import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './component/component.module';

@NgModule({
  declarations: [
    // AppComponent,
    ProductComponent,
    // PaAttrDirective,
    // PaStructureDirective,
    // PaIteratorDirective,
    // PaCellColor,
    // PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    // PaToggleView,
    // PaAddTaxPipe,
    // PaCategoryFilterPipe,
    // PaDiscountDisplayComponent,
    // PaDiscountEditorComponent,
    // PaDiscountPipe,
    // PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  providers: [
    // DiscountService
  ],
  bootstrap: [
    // AppComponent
    // ProductComponent
    ProductTableComponent,
    ProductFormComponent
  ]
})
export class AppModule { }
