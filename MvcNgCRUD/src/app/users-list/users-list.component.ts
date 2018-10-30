import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    usersList: object;
    showLoader: boolean;
    
    constructor(private http: Http, private router: Router) {

        this.loadUsersData();
        
        //this.usersList = [
        //    { UserId: "1", UserName: "abc", Address: "baroda", ContactNo: 344738, EmailId: "abc@gmail.com" },
        //    { UserId: "2", UserName: "def", Address: "anand", ContactNo: 342378, EmailId: "def@gmail.com" },
        //    { UserId: "3", UserName: "ghi", Address: "surat", ContactNo: 298473, EmailId: "ghi@gmail.com" },
        //    { UserId: "4", UserName: "jkl", Address: "rajkot", ContactNo: 985849, EmailId: "jkl@gmail.com" }
       //];
    }

    deleteUser(event, userId, userName) {

        if (confirm("Are you sure to delete data of user \'" + userId + ", " + userName + "\'?"))
        {
            let user = new User();
            user.UserId = userId;

            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            this.http.post('/api/Users/DeleteUser', user, options).subscribe((response: Response) => {
                
                if (response.status == 200) { 
                    this.loadUsersData();
                }
                else {
                    alert("Unable to delete data of \'" + userName + "\'.");
                }
            });
        }
        
    }

    loadUsersData()
    {
        this.showLoader = true;
        this.http.request('/api/Users/GetUsers')
            .subscribe((response: Response) => {
                this.usersList = response.json();
                this.showLoader = false;
            });
    }

    ngOnInit() {
    }

    
}
