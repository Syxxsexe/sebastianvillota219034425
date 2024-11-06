import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosGerenteComponent } from './components/datos-gerente/datos-gerente.component';
import { DetallesLicenciaComponent } from './components/detalles-licencia/detalles-licencia.component';
import { NombreYContactoComponent } from './components/nombre-ycontacto/nombre-ycontacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatosGerenteComponent,DetallesLicenciaComponent,NombreYContactoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticaFormulario';
}
