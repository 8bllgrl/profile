import { Injectable } from '@angular/core';
import { Education } from './education.model';
import { Project } from './project.model';
import { WorkExperience } from './workexperience.model';

@Injectable({
  providedIn: 'root'
})
export class AccomplishmentListDataService {

  // Work Experience
  
  private workExperience: WorkExperience[] = [
    {
      id:1,
      company: "Company Name",
      name: "position name",
      description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      startDate: "2021",
      endDate: "2022",
    }
  ];

  // Education

  private education: Education[] = [
    {
      id:1,
      name: "Kenzie",
      description: "dasdakjsdh",
      startDate: "",
      endDate: "",
    }
  ];
  

  // Personal Projects
  private projects: Project[] = [
    {
      id: 1,
      name: 'Backend API Development',
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: '2022-01-01',
      endDate: '2022-02-01'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is project 2',
      tech: ['React', 'Express', 'MySQL'],
      startDate: '2022-03-01',
      endDate: '2022-04-01'
    },
    {
      id: 3,
      name: 'Project 2',
      description: 'iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: ['React', 'Express', 'MySQL'],
      startDate: '2022-03-01',
      endDate: '2022-04-01'
    }
  ];

  constructor() { 
  }

  getProjects(): Project[] {
    return this.projects;
  }
  getWorkExperience(): WorkExperience[] {
    return this.workExperience;
  }
  getEducation(): Education[] {
    return this.education;
  }

}
