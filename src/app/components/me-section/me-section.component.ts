import { Component } from '@angular/core';

@Component({
  selector: 'app-me-section',
  templateUrl: './me-section.component.html',
  styleUrls: ['./me-section.component.css']
})
export class MeSectionComponent {
  description: string = "Hello and welcome! My name is Sage and I started my coding journey where most women do: on Tumblr. In the mid-2010s is when my interest in programming started. I would spend hours tinkering with the Sims 4, and hacking my Nintendo 3DS. Late nights spent tweaking mods to see the exact content I wished for sparked a drive in me to learn more.\n\nNow, in the present day, after taking a course at Kenzie Academy to learn Java and employing REST APIs, I realized that I wanted to dedicate my life to software engineering. I have completed several projects and am eager to continue learning and creating solutions that benefit others and build my portfolio. I am hard at work, and enthusiastic about acquiring new skills.\n\nMy ultimate goal is to break into the tech industry, where I can utilize my skills to their fullest potential. I am driven by the same determination I had during my school days, where I spent long nights working on projects. As I work on projects, I'm eagerly looking forward to employment as a software engineer.";
  formattedIntroduction: string = this.description.replace(/\n\n/g, '<br>');
}
