import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-asistencia-view',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './asistencia-view.component.html',
  styleUrl: './asistencia-view.component.scss'
})
export class AsistenciaViewComponent {
  constructor() {}
}
