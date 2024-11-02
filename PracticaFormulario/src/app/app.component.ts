import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosGerenteComponent } from './components/datos-gerente/datos-gerente.component';
import { DetallesLicenciaComponent } from './components/detalles-licencia/detalles-licencia.component';
import { NombreYContactoComponent } from './components/nombre-ycontacto/nombre-ycontacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticaFormulario';
}
