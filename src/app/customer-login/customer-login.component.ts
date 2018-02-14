import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../core/user.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  @Input() msg: string;


  constructor(private userService: UserService) { }

  ngOnInit() {

    const userName = this.userService.userName;
    console.log(userName);
  }

}
