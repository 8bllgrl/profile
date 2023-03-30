import { Component, Input } from '@angular/core';
import { SkillsContents } from 'src/app/models/skillscontents.model';
// import { Project } from '../../models/project.model';



@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent {
  @Input() title: string = "";
  @Input() skills: string[] = [];

  skills1 = new SkillsContents('Card 1', ['Skill 1', 'Skill 2', 'Skill 3']);
  skills2 = new SkillsContents('Card 2', ['Skill 4', 'Skill 5', 'Skill 6']);
  skills3 = new SkillsContents('Card 3', ['Skill 7', 'Skill 8', 'Skill 9']);

}
