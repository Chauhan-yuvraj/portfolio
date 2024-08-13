import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
interface TypeProject {
  id: string;
  avatar: string;
  name: string;
  description: string;
  year: string;
  role: string;
  demo: string;
  github: string;
}
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) projects!: TypeProject;
  @Output() Project = new EventEmitter();
  @Output() Demo = new EventEmitter<string>();
  @Output() Github = new EventEmitter<string>();

  get imagePath() {
    return this.projects.avatar;
  }
  OnselectedProject() {
    this.Project.emit(this.projects.id);
  }
  onDemoClicked() {
    this.Demo.emit(this.projects.demo);
  }
  onGitClicked() {
    this.Github.emit(this.projects.github);
  }
}
