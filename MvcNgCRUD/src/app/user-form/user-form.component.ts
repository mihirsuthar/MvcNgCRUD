import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../user.model';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    myForm: FormGroup;
    error: string;
    isError: boolean;

    constructor(fb: FormBuilder, private http: Http, private router: Router) {
        this.myForm = fb.group({
            'UserId': ['', Validators.required],
            'UserName': ['', Validators.required],
            'Address': ['', Validators.required],
            'ContactNo': ['', Validators.required],
            'EmailId':['', Validators.required]
        });

        this.isError = false;
        this.error = '';
    }

    ngOnInit() {
    }

    addNewUser(values: FormGroup) {        
        if (values.controls['UserId'].valid && values.controls['UserName'].valid && values.controls['Address'].valid &&
            values.controls['ContactNo'].valid && values.controls['EmailId'].valid) {
            alert('User Name: ' + values.controls['UserId'].value);
        }

        let user = new User();
        user.UserId = values.controls['UserId'].value;
        user.UserName = values.controls['UserName'].value;
        user.Address = values.controls['Address'].value;
        user.ContactNo = values.controls['ContactNo'].value;
        user.EmailId = values.controls['EmailId'].value;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('/api/Users/AddUser', user, options).subscribe((response: Response) => {
            //let body = response.json();
            if (response.status == 200)
            {
                this.router.navigate(['/userList']);
            }
            else
            {
                this.isError = true;
                this.error = "Unable to add user";
            }

            
            
        });

    }
}
