import { Component, OnInit } from '@angular/core';
import { AccomplishmentListDataService } from '../models/project-list-data-service';
import { Project } from '../models/project.model';

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
