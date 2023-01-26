import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../interfaces/user';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {
  user!: User;
  constructor(public usersService:UsersService) {}

  ngOnInit(): void {
    this.usersService.userSelected$
      .pipe(
        filter(user => user.id != this.user?.id)
      )
      .subscribe(user => {
      console.log(user)
      this.user = user
    })
  }
  
  ngOnDestroy(): void {
    this.usersService.userSelected$.unsubscribe()
  }
}
