import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductRepository} from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();
  constructor(private repository: ProductRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] === "edit";
    // this.editing = activeRoute.snapshot.paramMap.get('mode') === 'edit';
    if (this.editing) {
      // console.log(repository.getProduct(activeRoute.snapshot.params['id']));
      Object.assign(this.product, this.repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
