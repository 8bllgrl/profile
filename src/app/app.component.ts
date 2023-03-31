import { Component, OnInit } from '@angular/core';
import { SkillsContents } from './models/skillscontents.model';
import { AccomplishmentListDataService } from './models/project-list-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github-profile';

  // Skill details
  skillcard1Contents = new SkillsContents(
    'Card 1',
    ['Skill 1', 'Skill 2', 'Skill 3']
  );
  skillcard2Contents = new SkillsContents(
    'Card 2',
    ['Skill 4', 'Skill 5', 'Skill 6']
  );
  skillcard3Contents = new SkillsContents(
    'Card 3',
    ['Skill 7', 'Skill 8', 'Skill 9']
  );

  accomplishments = new AccomplishmentListDataService;

  // Project Details
  project1 = this.accomplishments.getProjects()[0];

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
