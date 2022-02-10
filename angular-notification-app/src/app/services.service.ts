import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supervisor } from './models/supervisor.model';
import { NotificationForm } from './models/notificationForm.model';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'

  })
};


@Injectable({ providedIn: 'root' })
export class Services {

  url_PostNotificationForm = 'http://localhost:8080/api/submit';
  url_GetSupervisors = 'http://localhost:8080/api/supervisors';

  constructor(private http: HttpClient) {}

  getSupervisors(){
    return  this.http.get<Supervisor[]>(this.url_GetSupervisors);
  }

  postNotificationForm(notificationForm:NotificationForm ){
    return this.http.post(this.url_PostNotificationForm,notificationForm,httpOptions);
  }

}



