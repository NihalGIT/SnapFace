import { Component , OnInit , Input} from '@angular/core';
import { FaceSnap } from '../models/face.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap !: FaceSnap;
  snap!: string;
  ngOnInit(){
    this.snap='Oh snap !'
  }
  onSnap(){
    if (this.snap=='Oh snap !'){
      this.facesnap.snaps++;
      this.snap='Oops un snap !';
    }else{
      this.facesnap.snaps--;
      this.snap='Oh snap !';
    }
  }

}
