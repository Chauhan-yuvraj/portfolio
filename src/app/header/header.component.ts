import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  // t1 = gsap.timeline();
  ngOnInit(): void {
    gsap.from(".Hname",{
      // y : -40,
      opacity : 0,
      duration : 1.5,
      delay : .2
    })
    
  }
}
