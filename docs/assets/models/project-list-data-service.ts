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
      id: 1,
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
      name: "Kenzie Academy",
      description: "At Kenzie Academy, I primarily learned how to code in Java, where I was taught by industry professionals. I learned Object Oriented Programming, algorithms, organizing data structures, and RESTful API implementation with techniques that included heavy usage of JUnit testing to ensure that our answers the weekly tests were accurate. Here, I also participated in study groups, where we would give and receive code reviews before we would upload them to Github. This course lasted 6 months.",
      startDate: "April 2022",
      endDate: "September 2022",
    }
  ];


  // Personal Projects
  private projects: Project[] = [
    {
      id: 1,
      name: 'Trivia Game',
      img: "https://i.imgur.com/YtKOebG.png",
      description: "This application is a trivia game that uses a <a href='https://jservice.kenzie.academy/'target=\"_blank\"  style='color:blue'><u>REST API</u></a> to gather data for the questions and answers, determines if the user answered correctly and provides feedback based on the user's response. Enjoy!",
      tech: ["Swing GUI", 'Jservice API', 'Java 16', "   "],
      link: 'https://github.com/8bllgrl/KenzieCapstone-TriviaApp',
      startDate: 'September',
      endDate: '2022'
    },
    {
      id: 2,
      name: 'Figure-Drawing Assistant',
      img: "https://i.imgur.com/a43Tyul.png",
      description: 'Designed to assist artists in their figure drawing practice, this application allows the user to create a personal gallery, and select the duration of time between each image. This allows the user to practice drawing figures in a variety of poses and at a variety of speeds.  ',
      tech: ['Java 16', 'Swing GUI', "   ", "   "],
      link: 'https://github.com/8bllgrl/FigureDrawingGUI',
      startDate: 'January',
      endDate: '2023'
    },
    {
      id: 3,
      name: 'Final Fantasy 14 Dialogue Search',
      img: "https://i.imgur.com/YhA7fvK.png",
      description: "A valuable tool for the MMORPG Final Fantasy XIV. This program assists players who want to easily search through the game's files to find dialogue from specific characters or about certain topics. The results of this program are in chronological order. ",
      tech: ['Java 16', 'Xiv API', 'Recursive Sorting'],
      link: 'https://github.com/8bllgrl/XIVAPI-Dialogue-Scraper',
      startDate: 'February',
      endDate: '2023'
    },
    {
      id: 4,
      name: 'Portfolio Site',
      img: "https://i.imgur.com/sa2VkXn.png",
      description: 'The one you are viewing right now! This is a portfolio website that uses the Angular framework and is hosted on GitHub Pages. The website is responsive and works well on all devices. It is also fast and easy to use. I am proud of this website and I believe it is a good representation of my skills. ',
      tech: ['Angular', 'Typescript', 'HTML', 'CSS'],
      link: 'https://github.com/8bllgrl/profile',
      startDate: 'April',
      endDate: '2023'
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
