import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { AnimateOnScrollDirective } from './experimental/animate-on-scroll.directive';
import { ScrollAnimationDirective } from './experimental/scroll-animation.directive';
import { AnimateOnScrollOtherDirective } from './experimental/animate-on-scoll-other.directive';
import { AnimateOnScrollOtherLFDirective } from './experimental/animate-on-scoll-otherLF.directive';
import { ScrollAnimationDirectiveBlur } from './experimental/scroll-animationblur.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MainInfoComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsCardComponent,
    ProjCardComponent,
    LoadingScreenComponent,
    AnimateOnScrollDirective,
    ScrollAnimationDirective,
    AnimateOnScrollOtherDirective,
    AnimateOnScrollOtherLFDirective,
    ScrollAnimationDirectiveBlur,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
