import {Component, Inject} from '@angular/core';
import {Product} from '../model/product.model';
import {Model} from '../model/repository.model';
// import {MODES, SHARED_STATE, SharedState} from './sharedState.model';
// import {Observer} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paTable',
  templateUrl: 'table.component.html'
})
export class TableComponent {
  category: string = null;

  constructor(private model: Model,
              private activeRoute: ActivatedRoute
              /* @Inject(SHARED_STATE) private observer: Observer<SharedState> */) {
    activeRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    });
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  getProduct(id: number): Product {
    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category);
  }

  deleteProduct(id: number): void {
    if(id>-1) {
      let flag: boolean = confirm('Are you sure?');
      if (flag) {
        this.model.deleteProduct(id);
      }
    } else {
      this.model.deleteProduct(id);
    }
  }

  // editProduct(key: number) {
  //   this.observer.next(new SharedState(MODES.EDIT, key));
  //  // this.state.id = key;
  //  // this.state.mode = MODES.EDIT;
  //  // this.pass.id = key;
  // }

  // createProduct() {
  //   this.observer.next(new SharedState(MODES.CREATE));
  // // this.state.id = undefined;
  //  // this.state.mode = MODES.CREATE;
  // }
}












