  import { inject, Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable, forkJoin } from 'rxjs';
  import { map, switchMap } from 'rxjs/operators';

  interface Repository {
    id: number;
    name: string;
    full_name: string;
    topics: string[]; // Add other properties if needed
  }

  @Injectable({
    providedIn: 'root',
  })
  export class ProjectsService {
    private httpClient = inject(HttpClient);
    private myToken =
      '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';

    private header = new HttpHeaders({
      Authorization: `Bearer ${this.myToken}`,
    });

    DecodeBase64(encodingString: string): string {
      return atob(encodingString);
    }

    getRepositories() {
      return this.httpClient
        .get<Repository[]>('https://api.github.com/users/Chauhan-yuvraj/repos', {
          headers: this.header,
        })
        .pipe(
          map((repos) =>
            repos.filter(
              (repo) => repo.topics && repo.topics.includes('portfolio-feature')
            )
          ),
          switchMap((filteredRepos) => {
            const requests = filteredRepos.map((repo) =>
              this.httpClient.get<any>(
                `https://api.github.com/repos/Chauhan-yuvraj/${repo.name}/contents/repository.js`,
                { headers: this.header }
              )
            );
            return forkJoin(requests);
          }),
          map((responses) =>
            responses.map((content) => {
              if (content.encoding === 'base64') {
                const decodedContent = this.DecodeBase64(content.content);
                return JSON.parse(decodedContent);
              }
              return null;
            })
          )
        );
    }
  }
