import { Component } from '@angular/core';
import  { MareasProviderService} from './mareas-provider.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  puertos:any=[];
  public appPages =[];

  constructor(private mareas:MareasProviderService) {
       this.mareas.returnPorts().subscribe(result => {
           this.puertos=result;
           for(let puerto of this.puertos){
              let pagina={
                 title:puerto.descripcion,
                 url: "folder/"+puerto.nombre};
              this.appPages.push(pagina)
            }          
       });
  }
}

