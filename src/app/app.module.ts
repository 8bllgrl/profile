import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MainInfoComponent,
    EducationComponent,
    FooterComponent,
    WorkExperienceComponent,
    SkillsCardComponent,
    ProjCardComponent,
    LoadingScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
