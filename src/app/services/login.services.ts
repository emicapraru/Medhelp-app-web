import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class LoginServices {
  private subject = new Subject<any>();
  private logoutSubject = new Subject<any>();
  private serverUrl = 'http://localhost:8000/users/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  sendAuthenticationMessage(email: string, pass: string) {
    if (email === 'admin' && pass === 'adminadmin') {
      this.subject.next();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Logare esuata!', detail: 'Username sau parola gresita!' });
    }
    // this.sendGetRequest(email, pass);
  }

  getAuthenticatedState(): Observable<any> {
    return this.subject.asObservable();
  }

  sendLogoutMessage() {
    this.logoutSubject.next();
  }
  getLogoutState(): Observable<any> {
    return this.logoutSubject.asObservable();
  }

  private sendGetRequest(email: string, pass: string): void {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(email + ':' + pass),
        'Content-Type': 'application/json',
      }),
    };

    this.http.get(this.serverUrl, httpOptions).subscribe(
      (data) => {
        console.log('Success:', data);
        this.subject.next();
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
