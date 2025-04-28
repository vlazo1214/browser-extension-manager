import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Extension } from './extension';
import { MockExtensionList } from './mock-extensions';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  constructor() { }

  getExtensions(): Observable<Extension[]> {
    const extList = of(MockExtensionList);
    return extList;
  }
}
