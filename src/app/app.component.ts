import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {

    const userName = this.userService.userName;
    console.log(userName);
  }

}
