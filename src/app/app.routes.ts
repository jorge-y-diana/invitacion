import { Routes } from '@angular/router';
import { InitViewComponent } from './views/init-view/init-view.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { AsistenciaViewComponent } from './views/asistencia-view/asistencia-view.component';
import { NosotrosViewComponent } from './views/nosotros-view/nosotros-view.component';
import { HorariosViewComponent } from './views/horarios-view/horarios-view.component';
import { RegaloViewComponent } from './views/regalo-view/regalo-view.component';

export const routes: Routes = [
  { path: 'inicio', component: InitViewComponent },
  { path: 'invitacion', component: MainViewComponent },
  { path: 'asistencia', component: AsistenciaViewComponent },
  { path: 'horarios', component: HorariosViewComponent },
  { path: 'nosotros', component: NosotrosViewComponent },
  { path: 'regalo', component: RegaloViewComponent },
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
];
