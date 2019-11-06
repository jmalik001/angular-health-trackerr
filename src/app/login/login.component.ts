import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public identityService: IdentityService) { }

  ngOnInit() {  
  }

public logout() {
this.identityService.logedIn = false;
}

public login() {
this.identityService.logedIn = true;
}

}
