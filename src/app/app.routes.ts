import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PhotographyComponent } from './photography/photography.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Home page',
    },
    {
        path: 'about-me',
        component: AboutComponent,
        title: 'About page',
    },
    {
        path: 'photography',
        component: PhotographyComponent,
        title: 'Home page',
    },
    {
        path: 'contact-me',
        component: ContactUsComponent,
        title: 'About page',
    },
    {
        path: 'developer',
        component: WebDevelopmentComponent,
        title: 'About page',
    }
];
