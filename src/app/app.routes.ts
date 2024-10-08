import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path : "",
        component : ContentComponent
    },{
        path : "works",
        component : ProjectsComponent
    },{
        path : "about",
        component : AboutComponent
    },{
        path : "contact",
        component : ContactComponent
    }

];
