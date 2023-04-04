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
      id: 1,
      name: "Kenzie Academy Graduate",
      description: "I completed the full-stack web development program at Kenzie Academy, where I learned a variety of skills including HTML, CSS, JavaScript, React, Node.js, and SQL. Throughout the program, I worked on a number of real-world projects to gain practical experience.",
      startDate: "January 2021",
      endDate: "September 2021",
    }
  ];
  

  // Personal Projects
  private projects: Project[] = [
    {
      id: 1,
      name: 'Backend API Development',
      img: "https://via.placeholder.com/400x250",
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: 'Month',
      endDate: 'Year'
    },
    {
      id: 2,
      name: 'Backend API Development',
      img: "https://via.placeholder.com/400x250",
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: '2022-01-01',
      endDate: '2022-02-01'
    },
    {
      id: 3,
      name: 'Backend API Development',
      img: "https://via.placeholder.com/400x250",
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: '2022-01-01',
      endDate: '2022-02-01'
    },
    {
      id: 4,
      name: 'Backend API Development',
      img: "https://via.placeholder.com/400x250",
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: '2022-01-01',
      endDate: '2022-02-01'
    },
    {
      id: 5,
      name: 'Backend API Development',
      img: "https://via.placeholder.com/400x250",
      description: 'Developed a RESTful API to power an e-commerce website using Node.js and Express.js. Implemented user authentication and authorization using JWT and Passport.js. Utilized MongoDB for database management and Mongoose as an Object Data Modeling (ODM) library. ',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Intellij'],
      link: 'https://example.com/project1',
      startDate: '2022-01-01',
      endDate: '2022-02-01'
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
