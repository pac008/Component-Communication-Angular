import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public users!: User[];
  public rowSelected!: number;
  
  constructor(private usersService:UsersService) {}

  ngOnInit(): void {
   this.usersService.getUsers()
    .subscribe( users => this.users = users);
  }

  setUserSelected(user: User, index: number): void {
    // this.usersService.userSelected = user
    this.rowSelected = index;
    this.usersService.userSelected$.next(user)
  }
}
