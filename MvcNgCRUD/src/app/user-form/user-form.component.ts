import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'userId': ['', Validators.required],
            'userName': ['', Validators.required],
            'address': ['', Validators.required],
            'contactNo': ['', Validators.required],
            'email':['', Validators.required]
        });
    }

    ngOnInit() {
    }

    addNewUser(values: FormGroup) {        
        if (values.controls['userId'].valid && values.controls['userName'].valid && values.controls['address'].valid &&
            values.controls['contactNo'].valid && values.controls['email'].valid) {
            alert('User Name: ' + values.controls['userId'].value);
        }
    }
}
