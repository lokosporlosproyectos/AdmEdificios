import { Injectable } from '@angular/core';
import { ITecnico } from '../components/interfaces/ITecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor() { 

    console.log("servicio tecnico");
    
  }
  getTecnicos(){
    return this.tecnicos;
  }

  private tecnicos:ITecnico[] = [
    {
      nombre: "jose",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "pepe",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "asdasd",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "agus",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "alguien",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "asdasd",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "asdasd",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    },
    {
      nombre: "juan",
      ci: "1.123.456-1",
      correo : "correo@gmail.com"
    }
  ];
  
}
