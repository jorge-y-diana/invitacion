import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { gsap } from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
@Component({
  selector: 'app-horarios-view',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './horarios-view.component.html',
  styleUrl: './horarios-view.component.scss'
})
export class HorariosViewComponent implements OnInit {
  constructor() { }
  ngOnDestroy(): void {
    ScrollTrigger.disable();
  }
  ngOnInit() {
    gsap.defaults({ ease: "none" });
    const pulses = gsap.timeline({
      defaults: {
        scale: 1,
        autoAlpha:1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }}).to(".text01", {}, 0.80)
      .to(".text02", {}, 1.60)
      .to(".text03", {}, 1.90)
      .to(".text04", {}, 2.20)
      .to(".text05", {}, 2.50)
      .to(".text06", {}, 2.80)
      .to(".text07", {}, 3.30);

    const main = gsap.timeline({
      scrollTrigger: {
        trigger: ".svg",
        scrub: true,
        start: "top center",
        end: "max"
      }
    }).to(".jorge-diana", { autoAlpha: 1, duration: 0.5 })
      .to(".jorge-diana", {
        motionPath: {
          path: ".theLine",
          align: ".theLine",
          alignOrigin: [0.5, 0.5],
        }, duration: 4
      }, 0).add(pulses, 0);
  }
}
