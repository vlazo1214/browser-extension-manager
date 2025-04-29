import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Extension } from './extension';
import { MockExtensionList } from './mock-extensions';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const extensions = MockExtensionList;
    return {extensions};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(extensions: Extension[]): number {
    return extensions.length > 0 ? Math.max(...extensions.map(extensions => extensions.id)) + 1 : 11;
  }
}