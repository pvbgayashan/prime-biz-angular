import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoginPage: boolean = false;
  public loggedUserName: string = 'Admin';

  constructor() {}

}
