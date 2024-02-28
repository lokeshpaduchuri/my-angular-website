import { Injectable } from '@angular/core';
import { getProperties, getUrl } from 'aws-amplify/storage';
import { list } from 'aws-amplify/storage';

@Injectable({
  providedIn: 'root'
})
export class AmplifyPhotoService {
  
  private imageUrl: String;
  private portraitImages: any[] =[];
  private familyImages: any[] = [];
  private landscapeImages: any[] =[];
  private productImages: any[] = [];
  private heroImages: any[] = [];
  loadedImageData: boolean;

   async getS3Files() {
    // Get all available folders and files in s3 bucket
    try {
      const filesList = await list({
        options: {
          listAll: true
        }
      });

      // Storing keys of only images into individual arrays
      filesList['items'].forEach(listItem => {
        if(listItem.key.includes('family') && listItem.key.includes('jpg') && !listItem.key.includes('thumbnail')) {
          this.familyImages.push({key: listItem.key});
        }

        if(listItem.key.includes('ports') && listItem.key.includes('jpg') && !listItem.key.includes('thumbnail')) {
          this.portraitImages.push({key: listItem.key});
        }

        if(listItem.key.includes('landscape') && listItem.key.includes('jpg') && !listItem.key.includes('thumbnail')) {
          this.landscapeImages.push({key: listItem.key});
        }

        if(listItem.key.includes('products') && listItem.key.includes('jpg') && !listItem.key.includes('thumbnail')) {
          this.productImages.push({key: listItem.key});
        }

        if(listItem.key.includes('homepage') && listItem.key.includes('jpg') && !listItem.key.includes('thumbnail')) {
          this.heroImages.push({key: listItem.key});
        }
      });

      this.sortCategoryImages(this.productImages);
      this.sortCategoryImages(this.portraitImages);
      this.sortCategoryImages(this.familyImages);
      this.sortCategoryImages(this.landscapeImages);
      this.sortCategoryImages(this.heroImages);

      this.loadedImageData = true;
    } catch (error) {
    }

  }

  sortCategoryImages (category: any[]) {
    // Need to traverse arrays and get URL's
    category.forEach( async img => {
      // To check for existence of a file
      const result = await getUrl({
        key: img.key,
        options: {
          validateObjectExistence: true // defaults to false
        }
      });

      img.url = result.url.href;

      // Set metadata of image
      const imgProps = await getProperties({
        key: img.key,
      });

      // Get imageType from s3 object metadata
      img.imageType = imgProps.metadata ? imgProps.metadata['imagetype']: '';

      //Set thumbnail image url
      if(!img.key.includes('homepage') ) {
        let thumbnailKey = img.key.replace('.jpg','')+'-thumbnail.jpg';
        const result2 = await getUrl({
          key: thumbnailKey,
          options: {
            validateObjectExistence: true // defaults to false
          }
        });
        img.thumbnailUrl = result2.url.href;
      }
    });

    // //console.log(category);
  }

  getImagesByType (type: any) {
    if( type === 'all') {
      return [...this.productImages, ...this.portraitImages, ...this.familyImages, ...this.landscapeImages];
    } else if (type === 'hero') {
      return this.heroImages;
    } else {
      return false;
    }
  }
  constructor() { }
}
