import { Component , OnInit } from '@angular/core';
import { FaceSnap } from '../models/face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnaps!: FaceSnap[];
  constructor(private faceSnapService: FaceSnapService) { }
  ngOnInit() {
    this.facesnaps = this.faceSnapService.getAllfacesnaps();
  }}