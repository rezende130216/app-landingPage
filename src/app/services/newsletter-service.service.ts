import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LetterResponse } from '../components/interfaces/letterResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsletterServiceService {

  private endpointUrl = '';


  constructor(private http: HttpClient) { }

  sendData(name:string, email: string): Observable<LetterResponse>{
    const data = {name,  email};
    return this.http.post<LetterResponse>(this.endpointUrl,data);
  }
}
