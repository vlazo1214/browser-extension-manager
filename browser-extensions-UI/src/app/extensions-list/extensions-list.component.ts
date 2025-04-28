import { Component, OnInit } from '@angular/core';

import { Extension } from '../extension';
import { ExtensionService } from '../extension.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extensions-list',
  templateUrl: './extensions-list.component.html',
  styleUrls: ['./extensions-list.component.css']
})
export class ExtensionsListComponent implements OnInit {
  constructor(private extensionService: ExtensionService) {}

  allFilter: boolean = true;
  activeFilter: boolean = false;
  inactiveFilter: boolean = false;

  extensions: Extension[] = [];
  tempExtensions: Extension[] = [];

  ngOnInit() {
    this.getExtensions();
    this.tempExtensions = this.extensions;
  }

  getExtensions(): void {
    this.extensionService.getExtensions().subscribe(extensions => this.extensions = extensions);
  }

  toggleAll(): void {
    this.tempExtensions = this.extensions;
  }

  filterActive(): void {
    this.tempExtensions = this.extensions.filter(ext => ext.isActive);
  }

  filterInactive(): void {
    this.tempExtensions = this.extensions.filter(ext => !ext.isActive);
  }

  toggleStatus(extension: Extension): void {
    extension.isActive = !extension.isActive;
  }

  // TODO
  removeExtension(): void {

  }
}
