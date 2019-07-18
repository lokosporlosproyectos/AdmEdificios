import { Component, OnInit, Input } from '@angular/core';
import { ITecnico } from '../../interfaces/ITecnico';
import { TecnicoService } from 'src/app/servicios/tecnico.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html'
})
export class TecnicosComponent implements OnInit {

  public listaTecnicos:ITecnico[];
  constructor(private _servicioTecnico: TecnicoService ) {
    this.listaTecnicos = _servicioTecnico.getTecnicos();
  }

  ngOnInit() {
    
  }

}
