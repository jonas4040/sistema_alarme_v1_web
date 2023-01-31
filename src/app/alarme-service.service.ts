import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmeService {
  private alarmeURL : string;

  constructor(private http: HttpClient) {
      this.alarmeURL ="http://localhost:8080/api/v1/alarme/";
  }

  /**
   * JAVA METHOD getTemperatura()
   */
  public getTemperatura() : Observable<string>{
    return this.http.get<string>(this.alarmeURL+"temperatura");
  }

  /**
   * JAVA METHOD resetar()
   */
  public resetar() : Observable<string>{
    return this.http.get<string>(this.alarmeURL+"reset");
  }

}
