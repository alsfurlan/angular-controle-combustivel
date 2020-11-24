import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCombustivelComponent } from './controle-combustivel.component';

describe('ControleCombustivelComponent', () => {
  let component: ControleCombustivelComponent;
  let fixture: ComponentFixture<ControleCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
