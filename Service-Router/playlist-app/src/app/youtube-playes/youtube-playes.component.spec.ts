import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayesComponent } from './youtube-playes.component';

describe('YoutubePlayesComponent', () => {
  let component: YoutubePlayesComponent;
  let fixture: ComponentFixture<YoutubePlayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
