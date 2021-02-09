import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DennisAngular';
  users;

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }


}

