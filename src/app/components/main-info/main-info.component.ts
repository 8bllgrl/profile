import { Component } from '@angular/core';

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

  descriptionContents: string = 
  `This is a long string with multiple lines
  that can be easily reaaaaaaaaaaaaad
  thanks to the use of 
  template literals and line breaks.
`;


}
