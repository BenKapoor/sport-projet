import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEquipeComponent } from './single-equipe.component';

describe('SingleEquipeComponent', () => {
  let component: SingleEquipeComponent;
  let fixture: ComponentFixture<SingleEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
