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
      description: " ",
      startDate: "2021",
      endDate: "2022",
    }
  ];

  // Education

  private education: Education[] = [
    {
      id: 1,
      name: "Kenzie Academy",
      description: "At Kenzie academy, I was taught by industry professionals from the ground up on how to learn Java. <br> <br> Over the span of 6 months, I uploaded 80+ projects to Github, also learning secondary skills such as navigating the bash terminal, project planning, and how to do code reviews. <br> <br> On top of that, I also learned extensively about JUnit testing, which was used on a weekly basis. Implementing REST APIs was also a feat, to which I eventually used in my final project. I've continued to work on the final project past my graduation date, you can view that here: <a href='https://jservice.kenzie.academy/' target=\"_blank\" style='color:blue; text-decoration:underline;'>Link</a>",
      startDate: "April 2022",
      endDate: "September 2022",
    }
  ];


  // Personal Projects
  private projects: Project[] = [

    {
      id: 3,
      name: 'Final Fantasy 14 Dialogue Search',
      img: "https://i.imgur.com/YhA7fvK.png",
      description: "A valuable tool for the MMORPG Final Fantasy XIV. This program assists players who want to easily search through the game's files to find dialogue from specific characters or about certain topics. The results of this program are in chronological order. ",
      tech: ['Python', 'Xiv REST API', 'CSV file manipulation'],
      link: 'https://github.com/8bllgrl/XIVAPI-Dialogue-Scraper',
      startDate: 'February',
      endDate: '2023'
    },
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
      id: 4,
      name: 'Portfolio Site',
      img: "https://i.imgur.com/sa2VkXn.png",
      description: 'The one you are viewing right now! This is a portfolio website that uses the Angular framework and is hosted on GitHub Pages. The website is responsive and works well on all devices. It is also fast and easy to use. I am proud of this website and I believe it is a good representation of my skills. ',
      tech: ['Angular', 'Typescript', 'HTML', 'CSS'],
      link: 'https://github.com/8bllgrl/profile',
      startDate: 'April',
      endDate: '2023'
    },
    {
      id: 5,
      name: 'Portfolio Site2',
      img: "https://i.imgur.com/sa2VkXn.png",
      description: 'The one you are viewing right now! This is a portfolio website that uses the Angular framework and is hosted on GitHub Pages. The website is responsive and works well on all devices. It is also fast and easy to use. I am proud of this website and I believe it is a good representation of my skills. ',
      tech: ['Angular', 'Typescript', 'HTML', 'CSS'],
      link: 'https://github.com/8bllgrl/profile',
      startDate: 'April',
      endDate: '2023'
    },
    {
      id: 6,
      name: 'Portfolio Site3',
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
