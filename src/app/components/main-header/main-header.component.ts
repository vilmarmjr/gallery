import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Input() showBackButton = false;

  loggedUser: UserModel;

  constructor(private readonly location: Location, private router: Router, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.setLoggedUser();
  }

  setLoggedUser(): void {
    this.authService.getLoggedUser().subscribe(user => (this.loggedUser = user));
  }

  back(): void {
    this.location.back();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
