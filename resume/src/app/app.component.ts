import { Component,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'resume';

  ngAfterViewInit() {
    new Typed('.text', {
      strings: ["Frontend Developer" , "Fullstack developer"],
      typeSpeed:100,
      backSpeed:100,
      backDelay:1000,
      loop: true,
    });
}
}
