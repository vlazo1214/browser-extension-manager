import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Extension } from './extension';
import { MockExtensionList } from './mock-extensions';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  private extensionsUrl = 'api/extensions';

  getExtensions(): Observable<Extension[]> {
    return this.http.get<Extension[]>(this.extensionsUrl);
  }

  removeExtension(id: number): Observable<Extension> {
    const url = `${this.extensionsUrl}/${id}`;
    return this.http.delete<Extension>(url, this.httpOptions);
  }
}
