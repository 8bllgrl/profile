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
}
