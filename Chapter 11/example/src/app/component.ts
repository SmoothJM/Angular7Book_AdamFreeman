import { Component, ApplicationRef } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';


@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {

  constructor(ref: ApplicationRef) {
    (window as any).appRef = ref;
    (window as any).model = this.model;
  }
  public model = new Model();
  // public product: Product;
  // public fontSizeWithUnits = '30px';
  // public fontSizeWithoutUnits = '30';

  public targetName = 'Kayak';
  public counter = 1;
  public math = Math;
  // getClassesByPosition(position: number): string {
  //   const product = this.getProductByPosition(position);
  //   return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  // }


  // getClasses(key: number): string {
  //   const product = this.model.getProduct(key);
  //   return 'p-2 ' + (product.price > 50 ? 'bg-danger' : 'bg-success');
  // }

  // saveProduct(): void {
  //   this.product = new Product(0, 'pencil', 'paperwork', 10);
  //   this.model.saveProduct(this.product);
  // }

  // getClassMap(key: number) {
  //   const product = this.model.getProduct(key);
  //   return {
  //     'text-center bg-danger': product.name === 'Kayak',
  //     'bg-info': product.price < 50
  //   };
  // }

  // getStyles(key: number) {
  //   const product = this.model.getProduct(key);
  //   return {
  //     fontSize: '30px',
  //     'margin.px': 100,
  //     color: product.price > 50 ? 'yellow' : 'pink'
  //   };
  // }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct() {
    const flag: boolean = confirm('Sure?');
    if (flag) {
      return this.model.getProducts().shift();
    } else {
      return null;
    }
  }

  getProductPrice(id: number): number {
    return this.math.floor(this.getProduct(id).price);
  }



}
