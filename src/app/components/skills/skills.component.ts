import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // contents of the skills go here!
  // they will be variables i can use at any time and don't have to dig into the html to find.

  programmingLanguages: string[] =[
    "Java",
    "Python",
  ];

  frameworks: string[] = [
    "Angular",
    "Spring Boot",
  ]

  databaseManagement: string[] = [
    "MySQL",
    "Postgres",
  ]


  

}
