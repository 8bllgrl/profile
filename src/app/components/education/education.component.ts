import { Component, OnInit } from '@angular/core';
import { Education } from '../../../assets/models/education.model';
import { AccomplishmentListDataService } from '../../../assets/models/project-list-data-service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  imageUrl: string = '../../../assets/media/img/cert.png';


  educationList: Education[] = [];

  constructor(private projectListDataService: AccomplishmentListDataService) { }

  ngOnInit() {
    this.educationList = this.projectListDataService.getEducation();
  }
}
