import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    myForm: FormGroup;

    constructor(fb: FormBuilder, private http: Http) {
        this.myForm = fb.group({
            'UserId': ['', Validators.required],
            'UserName': ['', Validators.required],
            'Address': ['', Validators.required],
            'ContactNo': ['', Validators.required],
            'EmailId':['', Validators.required]
        });
    }

    ngOnInit() {
    }

    addNewUser(values: FormGroup) {        
        if (values.controls['userId'].valid && values.controls['userName'].valid && values.controls['address'].valid &&
            values.controls['contactNo'].valid && values.controls['email'].valid) {
            alert('User Name: ' + values.controls['userId'].value);
        }

        let user = new User();
        user.UserId = values.controls['userId'].value;
        user.UserName = values.controls['UserName'].value;
        user.Address = values.controls['Address'].value;
        user.ContactNo = values.controls['ContactNo'].value;
        user.EmailId = values.controls['EmailId'].value;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('/api/Users/AddUser', user, options).subscribe((response: Response) => {
            let body = response.json();
            alert(body);
        });

    }
}
