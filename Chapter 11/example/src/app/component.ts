import { Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  public model = new Model();
  public product: Product;
  getClasses(): string {
    return this.model.getProducts().length ===5 ? 'bg-success' : 'bg-warning';
  }

  saveProduct(): void {
    this.product = new Product(0, 'pencil', 'paperwork', 10);
    this.model.saveProduct(this.product);
  }
}
