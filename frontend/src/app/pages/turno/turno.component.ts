import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {
  
  datos={
    fecha_inicio: '',
    fecha_final:'',
    servicio: ''
  };
  servicios:any[] = [];
  turnos:any[] = [];
  


  constructor(private service: ServicesService) { 
    this.obtener_servicios(1);
  }

  ngOnInit(): void {
  }

  obtener_servicios( id:number ){
    this.service.obtener_servicios(id).subscribe(
      e => {
        console.log(e);
        this.servicios.push( e );
      }
    );
  }

  buscar(){
    this.turnos = [];
    this.service.obtener_turnos_guardados( Number(this.datos.servicio) ).subscribe(
      data => {
        console.log(data);
        this.turnos.push( data );
      }
    );
  }

  agendar(){
    this.service.agendar_turno(Number(this.datos.servicio), this.datos.fecha_inicio, this.datos.fecha_final).subscribe(
      data => {
        console.log(data);
        this.buscar();
      },
      err => {
        console.log(err);
      }
    );
  }

}
