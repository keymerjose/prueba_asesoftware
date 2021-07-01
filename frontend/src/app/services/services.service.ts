import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = environment.url;
  constructor( private http: HttpClient ) { }

  obtener_servicios(id_comercio: number){
    return this.http.get(`${ this.url }/servicios/${ id_comercio }`);
  }

  obtener_turnos_guardados(id_servicio:number){
    return this.http.get(`${ this.url }/turnos/${ id_servicio }`);
  }

  agendar_turno( id_servicio:number, fecha_inicio:string, fecha_final:string ){
    return this.http.post(`${ this.url }/turnos`, { id_servicio, fecha_inicio, fecha_final });
  }
}
