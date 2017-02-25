import { Component, Input, EventEmitter, Output } from '@angular/core';
import {UsersService} from '../users.service';

// turns this normal typescript class to angular 2 component
// unique selector
@Component({
    selector: 'app-users',
    template: `
        <input type='text' [(ngModel)]='cheese'>
        <p>I'm in the UsersComponent</p>
        <p>STRUCTURAL DIRECTIVE</p>
        <p>Star before ngIf is a structural directive - a directive that changes the structure of DOM. Added an element to DOM.</p>
        <button (click)="showInfo = true">Show Info</button>
        <p *ngIf="showInfo">Some extra user info</p>
        <p *ngFor="let user of users">{{user}}</p>
        <p>ATTRIBUTE DIRECTIVE</p>
        <p>Attribute directives don't alter structure of DOM but changes the element it is placed on.</p>
        <p [ngStyle]="{'background-color': color}">This is green!</p>
        <p>Want to be able to pass info not just from app -> users component but also users -> app component</p>
        <button (click)="onShowAlert()">Show Alert</button>
    `
    //here is creating a new instance of the class provided here - could be good or bad but just note this does this
    // if want to share data between components, have to take away from component level and put on module level
    // providers: [UsersService]
})

export class UsersComponent {
    showInfo = false;
    color = 'green';
    cheese: string;
    users: any[];

    constructor(private usersService: UsersService) {
        this.users = this.usersService.getUsers();
    }
    // below connecting from app component - so don't declare here but say that it can be anything
    // also have to say that want to be bindable from outside this component
    // @Input () users: any;
    @Output() alertThrown = new EventEmitter<string>();
    onShowAlert() {
        this.alertThrown.emit(this.cheese);
    }
}