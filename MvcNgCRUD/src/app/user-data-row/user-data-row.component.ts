import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
    selector: 'app-user-data-row',
    templateUrl: './user-data-row.component.html',
    styleUrls: ['./user-data-row.component.css']
})
export class UserDataRowComponent implements OnInit {

    @Input() user: any;

    constructor() { }

    

    ngOnInit() {
    }

}
