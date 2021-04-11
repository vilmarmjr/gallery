import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Input() showBackButton = false;

  constructor(private readonly location: Location, private router: Router, private readonly authService: AuthService) {}

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
