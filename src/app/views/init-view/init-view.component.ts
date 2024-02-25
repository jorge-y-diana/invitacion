import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-init-view',
  standalone: true,
  imports: [HeaderComponent, MatButton, RouterModule],
  templateUrl: './init-view.component.html',
  styleUrl: './init-view.component.scss'
})
export class InitViewComponent {

  constructor(private router: Router) {}

  abrirInvitacion() {
    this.router.navigate(['../main-view']);
  }
}
