import {Component, Input} from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html'
})
export class ProductTableCoponent {
  @Input('model')
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number): void {
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;
}
