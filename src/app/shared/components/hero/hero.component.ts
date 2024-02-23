import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';

import { AmplifyPhotoService } from '../../services/amplify-photo.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  loaded: boolean;
  images: any;
  constructor(private photoService : AmplifyPhotoService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.photoService.getS3Files().then(() => {
      this.loaded = true;
      this.images = this.photoService.getImagesByType('hero');
      console.log(this.images);
    });
  }
}
