import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { projectlist } from './project-list';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  ProjectList = projectlist;

  OnselectedProject(id:string){
    console.log('my id is ' + id);
    
  }

  onDemoClicked(demo:string){
    window.open(demo , '_blank');
  }
  onGitClicked(github:string){
    window.open(github, '_blank');
  }
}
