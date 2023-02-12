import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  facesnap !: FaceSnap;
  snap!: string;
  constructor(private facesnapservice:FaceSnapService , private route:ActivatedRoute) { }
  ngOnInit(){
    this.snap='Oh snap !'
    const id = +this.route.snapshot.params['id'];
    this.facesnap=this.facesnapservice.getFaceSnapById(id);
  }
  onSnap(){
    if (this.snap=='Oh snap !'){
      this.facesnapservice.snapFaceSnapById(this.facesnap.id , 'snap');
      this.snap='Oops un snap !';
    }else{
      this.facesnapservice.snapFaceSnapById(this.facesnap.id , 'unsnap');
      this.snap='Oh snap !';
    }
  }

}
