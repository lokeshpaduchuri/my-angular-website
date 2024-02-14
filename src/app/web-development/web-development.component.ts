import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
interface EventItem {
  company?: string;
  date?: string;
  icon?: string;
  color?: string;
  details?: string;
  currentJob?: boolean;
  stack?: any
}

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [TimelineModule, CardModule, CommonModule],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { 
            company: 'Independent Health', 
            date: 'April 2020 - present', 
            icon: 'assets/icons/work.png', 
            color: '#9C27B0',
            details: 'MyIH - Brining members to RedShirt Treatment to access finding a doctor, access to their ID card and benefits information',
            currentJob: true,
            stack: [ 
              {
                name: 'HTML5',
                icon: 'assets/technologies/html5.svg'
              },
              {
                name: 'Angular',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Typescript',
                icon: 'assets/technologies/typescript.svg'
              },
              {
                name: 'Ionic',
                icon: 'assets/technologies/ionic.svg'
              },
              {
                name: 'CSS3',
                icon: 'assets/technologies/css3.svg'
              },
              {
                name: 'AngularJS',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Javascript',
                icon: 'assets/technologies/javascript.svg'
              },
              {
                name: 'Xcode',
                icon: 'assets/technologies/xcode.svg'
              },
              {
                name: 'Swift',
                icon: 'assets/technologies/swift.svg'
              },
              {
                name: 'Android',
                icon: 'assets/technologies/android.svg'
              },
              {
                name: 'Postman',
                icon: 'assets/technologies/postman-api.svg'
              },
              {
                name: 'Visual Studio',
                icon: 'assets/technologies/visual-studio.svg'
              },
              {
                name: 'Visual Studio Code',
                icon: 'assets/technologies/visual-studio-code.svg'
              }
            ]
          },
          { 
            company: 'Atlas Air', 
            date: 'November 2018 - April 2020', 
            icon: 'assets/icons/work.png', 
            color: '#673AB7',
            details: 'Crew Console Application - Helps the coordinators to send wakeup calls to flight pilots and attendants to ensure time to time delivery of commercial products', 
            stack: [ 
              {
                name: 'HTML5',
                icon: 'assets/technologies/html5.svg'
              },
              {
                name: 'Angular',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Typescript',
                icon: 'assets/technologies/typescript.svg'
              },
              {
                name: 'CSS3',
                icon: 'assets/technologies/css3.svg'
              },
              {
                name: 'Dart',
                icon: 'assets/technologies/dart.svg'
              },
              {
                name: 'Android',
                icon: 'assets/technologies/android.svg'
              },
              {
                name: 'Firebase',
                icon: 'assets/technologies/firebase.svg'
              },
              {
                name: 'Google Analytics',
                icon: 'assets/technologies/google-analytics.svg'
              },
              {
                name: 'Visual Studio Code',
                icon: 'assets/technologies/visual-studio-code.svg'
              }
            ]
          },
          { 
            company: '605 TV', 
            date: 'October 2017 - November 2018', 
            icon: 'assets/icons/work.png', 
            color: '#FF9800',
            details: 'Audience App - agencies and programmers can finally utilize traditional tv advertising in the same way they have been using digital advertising since its inception.', 
            stack: [ 
              {
                name: 'HTML5',
                icon: 'assets/technologies/html5.svg'
              },
              {
                name: 'CSS3',
                icon: 'assets/technologies/css3.svg'
              },
              {
                name: 'AngularJS',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Javascript',
                icon: 'assets/technologies/javascript.svg'
              },
              {
                name: 'Drupal',
                icon: 'assets/technologies/drupal.svg'
              },
              {
                name: 'Visual Studio Code',
                icon: 'assets/technologies/visual-studio-code.svg'
              }
            ]
          },
          { 
            company: 'Paychex', 
            date: 'April 2016 - Sepetember 2016', 
            icon: 'assets/icons/work.png', 
            color: '#607D8B', 
            details: 'Web-based application for payroll, human resource and benefits outsourcing solutions for small to medium sized businesses.',
            stack: [ 
              {
                name: 'HTML5',
                icon: 'assets/technologies/html5.svg'
              },
              {
                name: 'Angular 2',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Typescript',
                icon: 'assets/technologies/typescript.svg'
              },
              {
                name: 'Cordova',
                icon: 'assets/technologies/cordova.svg'
              },
              {
                name: 'CSS3',
                icon: 'assets/technologies/css3.svg'
              },
              {
                name: 'AngularJS',
                icon: 'assets/technologies/angular.svg'
              },
              {
                name: 'Javascript',
                icon: 'assets/technologies/javascript.svg'
              },
              {
                name: 'Visual Studio Code',
                icon: 'assets/technologies/visual-studio-code.svg'
              }
            ]
          }
      ];
  }
}
