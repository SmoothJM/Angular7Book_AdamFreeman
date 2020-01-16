import {Component, Input} from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import {DiscountService} from '../common/discount.service';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
  // @Input('model')
  // dataModel: Model;
  // dateObject: Date = new Date(2020, 1, 20);
  // dateString: string = '2020-02-21T00:00:00.000z';
  // dateNumber: number =1582243200000;
  discounter: DiscountService = new DiscountService();

  constructor(private dataModel: Model) {
  }
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
