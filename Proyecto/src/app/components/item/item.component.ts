import { Component, OnInit, Input } from '@angular/core';
import { ITecnico } from '../interfaces/ITecnico';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

 
  @Input() tecnico: ITecnico;
  public miTecnico: ITecnico;
  constructor() {
    
   }
  

  ngOnInit() {
    console.log(this.tecnico);
    this.miTecnico = this.tecnico;
  }

}
