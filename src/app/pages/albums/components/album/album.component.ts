import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlbumModel } from 'src/app/models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: AlbumModel;
  @Output() click = new EventEmitter<AlbumModel>();

  constructor() {}

  ngOnInit(): void {}
}
