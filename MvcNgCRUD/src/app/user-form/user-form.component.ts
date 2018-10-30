import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    myForm: FormGroup;
    userData: object;
    error: string;
    isError: boolean;
    isAdd: boolean;

    constructor(fb: FormBuilder, private http: Http, private router: Router, private _ActivatedRoute: ActivatedRoute) {

        if (this._ActivatedRoute.snapshot.params['id'] != null) {
            this.isAdd = false;

            //alert("Edit Data of User Id: " + this._ActivatedRoute.snapshot.params['id']);

            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let data = { UserId: this._ActivatedRoute.snapshot.params['id'] };

            //alert("User Id: " + this._ActivatedRoute.snapshot.params['id']);

            let user = new User();
            user.UserId = this._ActivatedRoute.snapshot.params['id'];

            this.http.post('/api/Users/GetUser', user, options)
                .subscribe((response: Response) => {
                    this.userData = response.json();

                    this.myForm = fb.group({
                        'Id': [this.userData['Id']],
                        'UserId': [this.userData['UserId'], Validators.required],
                        'UserName': [this.userData['UserName'], Validators.required],
                        'Address': [this.userData['Address'], Validators.required],
                        'ContactNo': [this.userData['ContactNo'], Validators.required],
                        'EmailId': [this.userData['EmailId'], Validators.required]
                    });
                    
                });
            
        }
        else {
            this.isAdd = true;

            //alert("add new user");

            this.myForm = fb.group({
                'Id': [''],
                'UserId': ['', Validators.required],
                'UserName': ['', Validators.required],
                'Address': ['', Validators.required],
                'ContactNo': ['', Validators.required],
                'EmailId': ['', Validators.required]
            });
        }


        this.myForm = fb.group({
            'Id': [''],
            'UserId': ['', Validators.required],
            'UserName': ['', Validators.required],
            'Address': ['', Validators.required],
            'ContactNo': ['', Validators.required],
            'EmailId': ['', Validators.required]
        });

        this.isError = false;
        this.error = '';
    }

    ngOnInit() {
    }

    addNewUser(values: FormGroup) {
        if (values.controls['UserId'].valid && values.controls['UserName'].valid && values.controls['Address'].valid &&
            values.controls['ContactNo'].valid && values.controls['EmailId'].valid) {
            //alert('User Name: ' + values.controls['UserId'].value);
            let user = new User();
            user.Id = values.controls['Id'].value;
            user.UserId = values.controls['UserId'].value;
            user.UserName = values.controls['UserName'].value;
            user.Address = values.controls['Address'].value;
            user.ContactNo = values.controls['ContactNo'].value;
            user.EmailId = values.controls['EmailId'].value;

            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            if (this.isAdd) { //Add User
                this.http.post('/api/Users/AddUser', user, options).subscribe((response: Response) => {                    
                    if (response.status == 200) {
                        this.router.navigate(['/userList']);
                    }
                    else {
                        this.isError = true;
                        this.error = "Unable to add user";
                    }
                });
            }
            else {//Edit user
                this.http.post('/api/Users/EditUser', user, options).subscribe((response: Response) => {
                    
                    if (response.status == 200) {
                        this.router.navigate(['/userList']);
                    }
                    else {
                        alert("Unable to edit user");
                        //this.isError = true;
                        //this.error = "Unable to edit user";
                    }
                });
            }
        }
        else {
            alert('Please enter valid data.');
        }

        
    }
}
