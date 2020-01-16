import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { LimitValidator } from "./limit.formvalidator";

export class ProductFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidationMessage(): string[] {
    const message: string[] = [];
    if (this.errors) {
      for (const errorName in this.errors) {
        switch (errorName) {
          case 'required':
            message.push(`You must enter a ${this.label}.`);
            break;
          case 'minlength':
            message.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`);
            break;
          case 'maxlength':
            message.push(`A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength} characters`);
            break;
          case 'pattern':
            message.push(`The ${this.label} contains illegal characters.`);
            break;
          case 'limit':
            message.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}.`);
            break;
        }
      }
    }
    // console.log(message);
    return message;
  }
}

export class ProductFormGroup extends FormGroup {

  constructor() {
    super({
      name: new ProductFormControl("Name", "name", "", Validators.required),
      category: new ProductFormControl("Category", "category", "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[A-Za-z ]+$"),
          Validators.minLength(3),
          Validators.maxLength(10)])),
      price: new ProductFormControl("Price", "price", "",
        Validators.compose([
          Validators.required,
          LimitValidator.Limit(100),
          Validators.pattern("^[0-9\.]+$")]))
    });
  }

  get productControls(): ProductFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as ProductFormControl);
  }

  getFormValidationMsg(form?: any): string[] {
    const messages: string[] = [];
    this.productControls.forEach(c => {
      c.getValidationMessage().forEach(m => messages.push(m));
    });
    return messages;
  }
  // getFormValidationMessages(form: any) : string[] {
  //   let messages: string[] = [];
  //   this.productControls.forEach(c => c.getValidationMessages()
  //     .forEach(m => messages.push(m)));
  //   return messages;
  // }
}
