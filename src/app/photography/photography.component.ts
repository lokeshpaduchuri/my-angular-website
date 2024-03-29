import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriaModule } from 'primeng/galleria';

import { AmplifyPhotoService } from '../shared/services/amplify-photo.service';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})
export class PhotographyComponent {

  

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  loaded: boolean;
  portraitImages: any;
  
constructor(private photoService : AmplifyPhotoService) { }
async ngOnInit(){ 

  if(!this.photoService.loadedImageData) {
    this.photoService.getS3Files().then(() => {
      this.loaded = true;
      this.portraitImages = this.photoService.getImagesByType('all');
    });
  } else {
    this.loaded = true;
    this.portraitImages = this.photoService.getImagesByType('all');
  }
}
}
