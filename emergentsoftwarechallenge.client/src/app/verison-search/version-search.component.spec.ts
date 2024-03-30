import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionSearchComponent } from './version-search.component';

describe('VerisonSearchComponent', () => {
  let component: VersionSearchComponent;
  let fixture: ComponentFixture<VersionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
