import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductFormGroup} from '../model/form.model';
import { Model } from '../model/repository.model';

@Component({
  selector: 'paProductForm',
  templateUrl: `productForm.component.html`,
  // styleUrls: ['productForm.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  constructor(private model: Model) {
  }
  // @Output('paNewProduct')
  // newProductEvent = new EventEmitter();

  submitForm (form: any): void {
    this.form.productControls.forEach(con => {
      this.newProduct[con.modelProperty] = con.value
    });
    this.formSubmitted = true;
    if (form.valid) {
      // this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.form.reset();
      this.formSubmitted = false;
    }
  }

}
