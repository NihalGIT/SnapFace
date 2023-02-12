import { Component , OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap !: FaceSnap;
  id!: number;
  snap!: string;
  constructor(private facesnapservice:FaceSnapService , private router: Router) { }
  ngOnInit(){
    this.snap='Oh snap !' ,
    this.id=this.facesnap.id;
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
  onView(){
    this.router.navigateByUrl('/facesnap/'+this.id);
  }

}
