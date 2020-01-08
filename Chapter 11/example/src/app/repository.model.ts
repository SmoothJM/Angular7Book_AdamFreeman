import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';


export class Model {
  private dataSource: SimpleDataSource;
  private products: Product[];
  private locator = (p: Product, id: number) => p.id === id;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = this.dataSource.getData();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product): void {
    if (product.id === 0 || product.id === null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      const index = this.products.findIndex(p => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private generateID() {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }



















}