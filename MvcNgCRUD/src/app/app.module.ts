import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { UserDataRowComponent } from './user-data-row/user-data-row.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OverlayModelComponent } from './overlay-model/overlay-model.component';

const routes: Routes = [
    { path: '', redirectTo: 'userList', pathMatch: 'full' },
    { path: 'userList', component: UsersListComponent },
    { path: 'userForm', component: UserFormComponent },
    { path: 'userForm/:id', component: UserFormComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UserDataRowComponent,
        UsersListComponent,
        UserFormComponent,
        OverlayModelComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
