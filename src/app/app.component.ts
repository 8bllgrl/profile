import { Component, OnInit } from '@angular/core';
import { SkillsContents } from '../assets/models/skillscontents.model';
import { AccomplishmentListDataService } from '../assets/models/project-list-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-profile';

  // Skill details
  skillcard1Contents = new SkillsContents(
    'Front-end',
    ['HTML', 'CSS', 'Typescript', 'Angular']
  );

  skillcard2Contents = new SkillsContents(
    'Back-end',
    ['Java', 'Python', 'SQL', 'Spring Boot', 'RESTful API']
  );
  
  skillcard3Contents = new SkillsContents(
    'Tools & Other',
    ['Git', 'GitHub', 'JetBrains / VSCode', 'Gradle']
  );


  accomplishments = new AccomplishmentListDataService;

  // Project Details
  project1 = this.accomplishments.getProjects()[0];
  project2 = this.accomplishments.getProjects()[1];
  project3 = this.accomplishments.getProjects()[2];
  project4 = this.accomplishments.getProjects()[3];

  ngOnInit() {
    // this.addScrollListener();
  }

  addScrollListener() {
    const circle = document.querySelector('.circle') as HTMLElement;
    const pageContents = document.querySelector('.page-contents') as HTMLElement;

    if (circle && pageContents) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const circleTop = pageContents.offsetTop - scrollTop;
        circle.style.top = `${circleTop}px`;
      });
    }
  }
}
