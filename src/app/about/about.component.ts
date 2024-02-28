import { Component } from '@angular/core';
import { PersonalDetails } from '../shared/enum/personal-details.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  aboutMeImage = "assets/images/its-me.JPG";

  sections = [
    {
      heading: "Hey there! I'm " + PersonalDetails.name,
      subtext: "Welcome to my little corner of the internet! I'm just a Web Developer with a passion for Photography. Whether I'm taking photos or writing code, you'll usually find me hooked to some music."
    },
    {
      heading: "What Drives Me?",
      subtext: "I believe in the transformative magic of photography, where every click has the potential to freeze a moment and tell a story. My core belief is that beauty lies in authenticity, where I see beauty in the ordinary and emotions in the fleeting. I'm on a mission to help preserve those memories, aiming to Illuminate Emotions through the lens and offer a unique perspective that captures those pure emotions."
    },
    {
      heading: "Why Hang Out Here?",
      subtext: "Expect a mix of Photography styles, travel experiences, cooking receipes and Web development updates. I'm all about being helpful, keeping it fun, and having a good time."
    },
    {
      heading: "Connect With Me!",
      subtext: "I'm not just about work—I love photography, cooking or travelling. Let's connect on Instagram for my photography content. Can't wait to share more of life's adventures with you!",
      icons: [
        {
          icon: 'assets/icons/instagram.svg',
          url: 'https://www.instagram.com/lokip_photography/'
        },
        {
          icon: 'assets/icons/twitter.svg',
          url: 'https://twitter.com/lokeshpaduchuri'
        },
        {
          icon: 'assets/icons/linkedin.svg',
          url: 'https://www.linkedin.com/in/lokeshpaduchuri'
        },
        {
          icon: 'assets/icons/github.svg',
          url: 'https://www.linkedin.com/in/lokeshpaduchuri'
        }
      ]
    }
  ]

}
