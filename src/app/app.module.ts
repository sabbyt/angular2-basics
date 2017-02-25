import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// [(ngModel)] will only work when you import FormsModule
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
  // tells root component
})
export class AppModule { }
