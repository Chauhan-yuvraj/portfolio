import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {gsap} from 'gsap';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {
  // t1 = gsap.timeline()
  ngOnInit(): void {
      // gsap.from(".gsap",{
      //   scale : 0,
      //   duration : 0.5,
      //   delay : 0.3,
      //   stagger : 0.5,
      // })
  }
}
