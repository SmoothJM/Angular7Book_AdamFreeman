import {Component, Inject} from '@angular/core';
import {Product} from '../model/product.model';
import {Model} from '../model/repository.model';
// import {MODES, SHARED_STATE, SharedState} from './sharedState.model';
import {NgForm} from '@angular/forms';
// import {Pass} from './pass.model';
// import {Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

// import {filter, map, distinctUntilChanged, skipWhile} from 'rxjs/operators';

@Component({
  selector: 'paForm',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  public product: Product = new Product();
  public originalProduct = new Product();
  // public lastId: number;
  editing: boolean = false;

  constructor(private model: Model,
              // private state: SharedState,
              // @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>,
              private activeRoute: ActivatedRoute,
              private router: Router) {

    activeRoute.params.subscribe(params => {
      this.editing = params['mode'] == 'edit';
      let id = params['id'];

      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product());
        Object.assign(this.originalProduct, this.product);
      }
      // console.log(id,model.getProduct(2));
    });


    // this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    // let id = activeRoute.snapshot.params['id'];
    // if (id != null) {
    //   Object.assign(this.product, model.getProduct(id) || new Product());
    // }


    // let name = activeRoute.snapshot.params['name'];
    // let category = activeRoute.snapshot.params['category'];
    // let price = activeRoute.snapshot.params['price'];
    // if (name != null && category != null && price != null){
    //   this.product.id = id;
    //   this.product.name = name;
    //   this.product.category = category;
    //   this.product.price = price;
    // } else {
    //   Object.assign(this.product, model.getProduct(id) || new Product());
    // }

    // stateEvents.pipe(filter(state => state.id !== 3))
    //   .pipe(map(state => new SharedState(state.mode, state.id == 5? 1: state.id)))
    //   .subscribe((ss) => {
    //   this.product = new Product();
    //   if (ss.id != undefined) {
    //     Object.assign(this.product, this.model.getProduct(ss.id));
    //   }
    //   this.editing = ss.mode == MODES.EDIT;
    // });

    // stateEvents.pipe(map(state => state.mode == MODES.EDIT ? state.id : -1))
    //   .pipe(distinctUntilChanged())
    //   .pipe(filter(id => id != 3))
    //   .subscribe((id) => {
    //     this.editing = id != -1;
    //     this.product = new Product();
    //     if(id != -1) {
    //       Object.assign(this.product, this.model.getProduct(id));
    //     }
    //   });

    // stateEvents
      // .pipe(skipWhile(state => state.mode == MODES.EDIT))
      // .pipe(distinctUntilChanged((firstState, secondState) =>
      //   firstState.mode == secondState.mode
      //   && firstState.id == secondState.id))
      // .subscribe(update => {
      //   this.product = new Product();
      //   if (update.id != undefined) {
      //     Object.assign(this.product, this.model.getProduct(update.id));
      //   }
      //   this.editing = update.mode == MODES.EDIT;
      // });
  }

  // get editing(): boolean {
  //   return this.state.mode === MODES.EDIT;
  // }
  submitForm(form: NgForm): void {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.originalProduct = this.product;
      // this.product = new Product();
      this.router.navigateByUrl('/');
      // form.reset();
    }
  }



  resetForm() {
    this.product = new Product();
  }

  // ngDoCheck() {
  //   if (this.lastId !== this.state.id) {
  //     this.product = new Product();
  //     if (this.state.mode == MODES.EDIT) {
  //       Object.assign(this.product, this.model.getProduct(this.state.id));
  //     }
  //     this.lastId = this.state.id;
  //   }
  // }


  public submitted: boolean = false;
  public second: number = 1000;

  click() {
    this.submitted = true;
    let clock = setInterval(() => {
      this.second -= 1;
      if (this.second < 0) {
        clearInterval(clock);
        this.submitted = false;
        this.second = 1000;
      }
    }, 1);
  }

}












