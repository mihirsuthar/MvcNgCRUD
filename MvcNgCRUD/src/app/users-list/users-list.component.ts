import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    usersList: object;
    
    constructor(private http: Http) {

        this.http.request('/api/Users/GetUsers')
            .subscribe((response: Response) => {
                this.usersList = response.json();

            });
        //this.usersList = [
        //    { UserId: "1", UserName: "abc", Address: "baroda", ContactNo: 344738, EmailId: "abc@gmail.com" },
        //    { UserId: "2", UserName: "def", Address: "anand", ContactNo: 342378, EmailId: "def@gmail.com" },
        //    { UserId: "3", UserName: "ghi", Address: "surat", ContactNo: 298473, EmailId: "ghi@gmail.com" },
        //    { UserId: "4", UserName: "jkl", Address: "rajkot", ContactNo: 985849, EmailId: "jkl@gmail.com" }
       //];
    }

    editUser(event, userId) {
        alert('User Id: ' + userId);
        event.stopPropagation();
    }

    ngOnInit() {
    }

    
}
