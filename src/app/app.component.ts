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
    setInterval(() => {
    this.alarmeService.getTemperatura().subscribe(
      data => {
        if(data!==null && data!==undefined){
          this.temperatura = data;
        }
          console.log(data);
      });
    },660); //chama de mais ou menos meio em meio segundo
  }

  title = 'Sistema de Alarme v1';

  resetar(){
    this.alarmeService.resetar().subscribe(
      response =>{
        this.estado="fechada";
      } );
  }
}
