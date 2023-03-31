import { Component } from '@angular/core';
import { SkillsContents } from './models/skillscontents.model';
import { AccomplishmentListDataService } from './models/project-list-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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




  // Project Details


}
