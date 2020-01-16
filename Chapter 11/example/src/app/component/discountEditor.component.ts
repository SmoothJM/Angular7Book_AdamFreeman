import {Component, Input} from '@angular/core';
import {DiscountService} from '../common/discount.service';

@Component({
  selector: 'paDiscountEditor',
  templateUrl: 'discountEditor.component.html'
})
export class PaDiscountEditorComponent {
  // @Input('discounter')
  // discounter: DiscountService;
  constructor(private discounter: DiscountService) {
  }
}







