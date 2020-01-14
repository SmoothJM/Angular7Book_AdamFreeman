import { Component, ApplicationRef } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';
import {ProductFormGroup} from './form.model';

@Component({
  selector: "app",
  templateUrl: "template.html",
  styleUrls: ["component.css"]
})
export class ProductComponent {

  // constructor(ref: ApplicationRef) {
  //   (window as any).appRef = ref;
  //   (window as any).model = this.model;
  // }
  public model = new Model();
  // public selectedProduct: string;
  // public product: Product;
  // public fontSizeWithUnits = '30px';
  // public fontSizeWithoutUnits = '30';

  // public targetName = 'Kayak';
  // public counter = 1;
  // public math = Math;
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

  // getProductByPosition(position: number): Product {
  //   return this.model.getProducts()[position];
  // }

  // getSelected(product: Product): boolean {
  //   return product.name === this.selectedProduct;
  // }
  // getProductCount(): number {
  //   return this.getProducts().length;
  // }
  //
  // getKey(index: number, product: Product) {
  //   return product.id;
  // }
  //
  // get nextProduct() {
  //   const flag: boolean = confirm('Sure?');
  //   if (flag) {
  //     return this.model.getProducts().shift();
  //   } else {
  //     return null;
  //   }
  // }
  //
  // getProductPrice(id: number): number {
  //   return this.math.floor(this.getProduct(id).price);
  // }
  formSubmitted = false;
  newProduct: Product = new Product();
  form: ProductFormGroup = new ProductFormGroup();
  showTable: boolean = true;
  darkColor: boolean = false;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  deleteProduct(id: number){
    this.model.deleteProduct(id);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
    this.model.saveProduct(p);
  }
  // getValidationMessage(state: any, thingName?: string): string[] {
  //   const thing: string = state.path || thingName;
  //   const message: string[] = [];
  //   if (state.errors) {
  //     for (const errorName in state.errors) {
  //       switch (errorName) {
  //         case 'required':
  //           message.push(`You must enter a ${thing}.`);
  //           break;
  //         case 'minlength':
  //           message.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
  //           break;
  //         case 'pattern':
  //           message.push(`The ${thing} contains illegal characters.`);
  //           break;
  //       }
  //     }
  //   }
  //   // console.log(message);
  //   return message;
  // }

  // getFormValidationMsg(form: NgForm): string[] {
  //   const messages: string[] = [];
  //   Object.keys(form.controls).forEach(k => {
  //     this.getValidationMessage(form.controls[k], k)
  //       .forEach(m => messages.push(m));
  //   });
  //   return messages;
  // }

  submitForm(form: NgForm): void {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      this.formSubmitted = false;
      form.reset();
    }
  }























}

