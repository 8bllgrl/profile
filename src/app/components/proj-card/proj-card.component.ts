import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.css']
})
export class ProjCardComponent {
  // @Input() imageUrl: string ="";
  // @Input() title: string ="";
  // @Input() description: string ="";
  @Input() project: Project = new Project(
    999,
    '',
    '',
    '',
    '',
    []
  );
  
}
