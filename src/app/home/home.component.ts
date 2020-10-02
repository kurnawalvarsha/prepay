import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services';
import { User } from '../models';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 invalidLogin: boolean;
 resultStatus:boolean


 loading = false;
 users: User[];



 ngOnInit() {
     this.loading = true;
    //  this.userService.getAll().pipe(first()).subscribe(users => {
    //      this.loading = false;
    //      this.users = users;
    //  });
 }
  constructor(
    private router: Router,
    private authService: AuthenticationService
    ,private route:ActivatedRoute,private userService: UserService) { }

  signIn(credentials) {
 this.authService.login(credentials.username,credentials.password)
    .pipe(first())
    .subscribe(
        data => {
          this.router.navigate(['/dashboard'])
        },
        error => {
        this.invalidLogin = true;
        });

  }

}
