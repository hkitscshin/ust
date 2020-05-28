import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

export interface SendMailRequest {
  email: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: {
    fileName: string;
    url: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class FunctionsCaller {

  constructor(
    private aff: AngularFireFunctions
  ) {}

  sendMail(request: SendMailRequest): Observable<void> {
    return this.aff.httpsCallable('sendMail')(request);
  }
}
