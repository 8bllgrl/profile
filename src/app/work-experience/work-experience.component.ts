import { Component, OnInit } from '@angular/core';
import { AccomplishmentListDataService } from '../models/project-list-data-service';
import { WorkExperience } from '../models/workexperience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: WorkExperience[] = [];

  constructor(private projectListDataService: AccomplishmentListDataService){}

  ngOnInit(){
    this.workExperience = this.projectListDataService.getWorkExperience();
  }
  

}
