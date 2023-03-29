import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/education.model';
import { AccomplishmentListDataService } from '../../models/project-list-data-service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educationList: Education[] = [];

  constructor(private projectListDataService: AccomplishmentListDataService) { }

  ngOnInit() {
    this.educationList = this.projectListDataService.getEducation();
  }
}
