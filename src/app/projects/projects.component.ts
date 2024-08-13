import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';

export interface githubResponse {
  name: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  private projectService = inject(ProjectsService);

  repositories:any[] = [];

  ngOnInit(): void {
    this.projectService.getRepositories().subscribe({
      next : (repos) =>{
        this.repositories = repos;
        console.log(repos);
      },
      error : (error)=>{
        console.error("ERROR : ", error );
      }
     })
  }

  OnselectedProject(id: string) {
    console.log('my id is ' + id);
  }

  onDemoClicked(demo: string) {
    window.open(demo, '_blank');
  }
  onGitClicked(github: string) {
    window.open(github, '_blank');
  }
}
