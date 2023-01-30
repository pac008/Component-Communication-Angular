import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../interfaces/user';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public user!: User;
  private subscriptionUserSelected!: Subscription;
  constructor(public usersService:UsersService) {}
  ngOnDestroy(): void {
    this.subscriptionUserSelected.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriptionUserSelected = this.usersService.userSelected$
      .pipe(
        filter( user => user.id != this.user?.id)
      )
      .subscribe( user => {
        console.log(user);
        this.user = user;
      } );
  }

}
