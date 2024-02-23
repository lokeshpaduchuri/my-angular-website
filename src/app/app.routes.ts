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
        title: 'Photography page',
    },
    {
        path: 'contact-me',
        component: ContactUsComponent,
        title: 'Contact Me page',
    },
    {
        path: 'developer',
        component: WebDevelopmentComponent,
        title: 'Web Development page',
    }
];
