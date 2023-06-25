import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm;
invalid = false
valid = false
constructor(private formBuilder: FormBuilder, private userSer: UserService, private router: Router){
  this.loginForm = formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })
}


login(){
  const Data = this.loginForm.value;
  this.userSer.login(Data).subscribe({
    next: (result) => {
      localStorage.setItem('currentuser', JSON.stringify(result))
      this.valid = true
      this.router.navigateByUrl('/home').then(() =>{
        window.location.reload()
      })
      
    }, error: (err) => {
      this.invalid = true
      console.log(err.error)
    }
  })
}


}









