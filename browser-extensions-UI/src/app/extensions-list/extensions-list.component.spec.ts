import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsListComponent } from './extensions-list.component';

describe('ExtensionsListComponent', () => {
  let component: ExtensionsListComponent;
  let fixture: ComponentFixture<ExtensionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtensionsListComponent]
    });
    fixture = TestBed.createComponent(ExtensionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
