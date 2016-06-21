import {Component} from '@angular/core';
import {ControlGroup, Control, Validators, FormBuilder} from '@angular/common';

@Component({
  selector: 'feedback',
  templateUrl: 'app/feedback.component.html'
})
export class FeedbackComponent {

  feedbackObject: Object = {};

  onSubmitTemplateDrivenForm() {
    console.log('Template-driven form submitted:');
    console.log(this.feedbackObject);
  }

  // modelDrivenForm: ControlGroup;
  // firstName: Control = new Control("", Validators.required);
  //
  // constructor(formBuilder: FormBuilder) {
  //
  //   this.modelDrivenForm = formBuilder.group({
  //     "firstName": this.firstName,
  //     "message": ["", Validators.minLength(3)]
  //   });
  //
  //   this.modelDrivenForm.controls['firstName'].valueChanges.subscribe(value => {
  //     console.log('First name changed = ' + value);
  //   });
  //
  // }
  //
  // onSubmitModelDrivenForm() {
  //   console.log('Model-driven form submitted:');
  //   console.log(this.modelDrivenForm);
  // }

}
