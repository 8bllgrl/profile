import { Component, OnInit } from '@angular/core';
import { AccomplishmentListDataService } from '../../../assets/models/project-list-data-service';
import { WorkExperience } from '../../../assets/models/workexperience.model';

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
