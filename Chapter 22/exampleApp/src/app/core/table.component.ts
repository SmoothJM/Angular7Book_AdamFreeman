import {Component, Inject} from '@angular/core';
import {Product} from '../model/product.model';
import {Model} from '../model/repository.model';
// import {MODES, SHARED_STATE, SharedState} from './sharedState.model';
// import {Observer} from 'rxjs';

@Component({
  selector: 'paTable',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  constructor(private model: Model,
              /* @Inject(SHARED_STATE) private observer: Observer<SharedState> */) {  }

  getProduct(id: number): Product {
    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(id: number): void {
    let flag: boolean = confirm('Are you sure?');
    if (flag) {
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












