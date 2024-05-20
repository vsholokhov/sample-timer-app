import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimerInterface} from "../interfaces/timer";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  httpClient = inject(HttpClient);
  url = 'http://localhost:8080/api';

  getSecondsLeft(): Observable<TimerInterface> {
    return this.httpClient.get<TimerInterface>(`${this.url}/timer`)
  }

}
