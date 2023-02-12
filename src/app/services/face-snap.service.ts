import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face.model";

@Injectable({     providedIn: 'root'    })
export class FaceSnapService{
    facesnaps : FaceSnap[] = [
        {
          id:1,
          title: 'FaceSnap',
          description: 'A social media app for sharing photos',
          createdDate:new Date(),
          snaps:10,
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location:'Paris, France'
        },
        { 
          id:2,
          title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 0 ,
        location: 'San Francisco, CA'
      },
      {
        id:3,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      ];
      getAllfacesnaps(): FaceSnap[] {
        return this.facesnaps;
      } 
      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }       
}