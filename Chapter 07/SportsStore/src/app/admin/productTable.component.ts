import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
  constructor(private productRepository: ProductRepository) {  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(id: number) {
    this.productRepository.deleteProduct(id);
  }













































}
