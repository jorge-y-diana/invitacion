import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InitViewComponent } from './views/init-view/init-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InitViewComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
