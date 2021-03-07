import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserName: string = '';
  public loginPassword: string = '';
  public isInvalidCredentials: boolean = false;

  private USER_NAME = 'admin';
  private PASSWORD = 'admin';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  public onLogin() {
    if (this.loginUserName === this.USER_NAME && this.loginPassword === this.PASSWORD) {
      this.isInvalidCredentials = false;
      this.router.navigate(['master-data', { relativeTo: this.activatedRoute }]);
    } else {
      this.invalidate();
    }
  }

  private invalidate() {
    this.loginUserName = '';
    this.loginPassword = '';
    this.isInvalidCredentials = true;
  }

}
