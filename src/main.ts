import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

Amplify.configure({
  ...Amplify.getConfig(),
  Storage: {
    S3: {
      region: 'us-east-1', // (required) - Amazon S3 bucket region
      bucket: 'portfoliophotos00315-dev' // (required) - Amazon S3 bucket URI
    }
  }
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
