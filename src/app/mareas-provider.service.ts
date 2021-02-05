import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MareasProviderService {

  constructor(public http: HttpClient) { }

  returnPorts() {
    return this.http.get("ihm/Documentacion/Mareas/json/puertos0.json");
  }
  returnTides(month:string,year:string,port:string){
   return this.http.get("/ihm/Documentacion/Mareas/json/"+year+"/"+port+"/"+port+"_mes_"+month+".json");
  } 
}
