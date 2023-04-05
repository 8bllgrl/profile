import { Component, OnInit } from '@angular/core';
import { AccomplishmentListDataService } from '../../../assets/models/project-list-data-service';
import { Project } from '../../../assets/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectListDataService: AccomplishmentListDataService) { }

  ngOnInit() {
    this.projects = this.projectListDataService.getProjects();
  }

}
