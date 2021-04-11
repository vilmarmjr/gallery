import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Input() showBackButton = false;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }
}
