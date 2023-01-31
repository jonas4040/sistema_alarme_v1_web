import { AlarmeService } from './alarme-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  temperatura : any = '25ºC';
  estado : any = 'fechada';

  constructor (private alarmeService:AlarmeService){}


  ngOnInit(): void {
    this.alarmeService.getTemperatura().subscribe(
      data => {
        if(data!==null && data!==undefined){
          this.temperatura = JSON.parse(JSON.stringify(data));
          this.estado = JSON.parse(JSON.stringify(data)) === '1'? 'aberta' : 'fechada';
        }
          console.log(data);
      });
  }

  title = 'Sistema de Alarme v1';
}
