import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    usersList: object;
    
    constructor() {
        this.usersList = [
            { userId: "1", userName: "abc", address: "baroda", contactNo: 344738, email: "abc@gmail.com" },
            { userId: "2", userName: "def", address: "anand", contactNo: 342378, email: "def@gmail.com" },
            { userId: "3", userName: "ghi", address: "surat", contactNo: 298473, email: "ghi@gmail.com" },
            { userId: "4", userName: "jkl", address: "rajkot", contactNo: 985849, email: "jkl@gmail.com" }
        ];
    }

    ngOnInit() {
    }
}
