import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
@Component({
  selector: 'app-nosotros-view',
  standalone: true,
  imports: [HeaderComponent, MatButtonModule, MatIconModule, ClipboardModule],
  templateUrl: './regalo-view.component.html',
  styleUrl: './regalo-view.component.scss'
})
export class RegaloViewComponent {
  cuenta = 'ES4801825322230207773327';
  constructor(private router: Router) {}

  abrirInvitacion() {
    this.router.navigate(['../main-view']);
  }


}
