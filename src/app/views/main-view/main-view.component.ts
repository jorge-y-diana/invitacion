import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RouterModule, HeaderComponent, MatGridListModule, MatButton],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {

  constructor(private router: Router) {}

  abrirAsistencia(){
    this.router.navigate(['../asistencia']);

  }
}
