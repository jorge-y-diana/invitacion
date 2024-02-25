import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nosotros-view',
  standalone: true,
  imports: [HeaderComponent, MatButton, RouterModule, MatIconModule],
  templateUrl: './nosotros-view.component.html',
  styleUrl: './nosotros-view.component.scss'
})
export class NosotrosViewComponent {

  constructor(private router: Router) {}

  abrirInvitacion() {
    this.router.navigate(['../main-view']);
  }
}
