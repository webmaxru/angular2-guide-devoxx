import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ContactComponent {

    feedbackObject: Object = {
        email: 'salnikov@gmail.com'
    };

    constructor(formBuilder: FormBuilder) {

        this.modelDrivenForm = new FormGroup({
            email: new FormControl(this.feedbackObject.email),
            message: new FormControl("", Validators.required)
        });

        // this.modelDrivenForm = formBuilder.group({
        //     "email": [this.feedbackObject.email],
        //     "message": ["", Validators.required]
        // });

        this.modelDrivenForm.controls['email'].valueChanges.subscribe(value => {
            console.log('Email changed = ' + value);
        });

    }

    onSubmitModelDrivenForm() {
        console.log('Model-driven form submitted:');
        console.log(this.modelDrivenForm.value);
    }

}
