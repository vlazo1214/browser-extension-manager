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

  extensions: Extension[] = [];
  filterText: 'all' | 'active' | 'inactive' = 'all';

  ngOnInit() {
    this.getExtensions();
  }

  getExtensions(): void {
    this.extensionService.getExtensions().subscribe(extensions => this.extensions = extensions);
  }

  get displayedExtensions(): Extension[] {
    switch (this.filterText){
      case 'active':
        return this.extensions.filter(ext => ext.isActive);
      case 'inactive':
        return this.extensions.filter(ext => !ext.isActive);
      default:
        return this.extensions;
    }
  }

  toggleFilter(filter: 'all' | 'active' | 'inactive') {
    this.filterText = filter;
  }

  toggleStatus(extension: Extension): void {
    extension.isActive = !extension.isActive;
  }

  // TODO
  removeExtension(extension: Extension): void {
    this.extensions = this.extensions.filter(ext => ext !== extension);
    this.extensionService.removeExtension(extension.id).subscribe();
  }
}
