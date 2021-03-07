import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isLoginPage: boolean = false;
  public loggedUserName: string = 'Admin';

  constructor(private router: Router) {}

  ngOnInit() {

    // validate for login page
    this.router.events.subscribe(
      (event: any) => {
        if (event.url !== undefined) {
          this.isLoginPage = event.url === '/';
        }
      }
    );

  }

  public onLogout() {
    this.router.navigate(['/']);
  }

}
