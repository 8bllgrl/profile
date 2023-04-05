import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../experimental/animate-on-scroll.directive';


@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {

  // variables for the main about section go here

  // picture
  profileImage: string = "https://avatars.githubusercontent.com/u/102974548?v=4";
  fullName: string = "Sage Belknap";
  firstName: string = "Sage";
  lastName: string = "Belknap"
  jobTitle: string = "Junior Full-stack Developer"

//   descriptionContents: string = 
//   `I am a back end developer with 1 year of experience in building projects that solve creative problems and building web applications.
//   I am proficient in a variety of programming languages, including Java, Python, and Typescript. I am also familiar with frameworks such as 
//   Angular, React, and Spring Boot, and UI design.
// `;


}
