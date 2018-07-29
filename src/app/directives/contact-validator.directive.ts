import { Directive } from '@angular/core';
import {AbstractControl,ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appContactValidator]'
})
export class ContactValidatorDirective {

  constructor() { }

  static minLengthCustom(min : Number) : ValidatorFn
  {
    return (c : AbstractControl) : {[key : string] : boolean } | null =>{
      if (c.value && (isNaN(c.value) || c.value < min)) {
        return { 'range': true };
    }
    return null;
    }
  }

  static maxLengthCustom(max : Number) : ValidatorFn
  {
    return (c : AbstractControl) : {[key : string] : boolean } | null =>{
      if (c.value && (isNaN(c.value) || c.value > max)) {
        return { 'range': true };
    }
    return null;
    }
  }
  
}
