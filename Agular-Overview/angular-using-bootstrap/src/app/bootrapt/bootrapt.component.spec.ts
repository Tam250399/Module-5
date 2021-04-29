import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootraptComponent } from './bootrapt.component';

describe('BootraptComponent', () => {
  let component: BootraptComponent;
  let fixture: ComponentFixture<BootraptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootraptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootraptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
