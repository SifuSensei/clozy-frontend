import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  {

  constructor(private uSer: UserService, private router: Router) { }
  canActivate(): boolean {
    if (!this.uSer.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } this.uSer.isAuthenticated()
    return true;
  }
  
}
