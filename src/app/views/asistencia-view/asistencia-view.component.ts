import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
@Component({
  selector: 'app-asistencia-view',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './asistencia-view.component.html',
  styleUrl: './asistencia-view.component.scss'
})
export class AsistenciaViewComponent {
  constructor() {}
}
