import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNaoencontradoComponent } from './cursos-naoencontrado.component';

describe('CursosNaoencontradoComponent', () => {
  let component: CursosNaoencontradoComponent;
  let fixture: ComponentFixture<CursosNaoencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosNaoencontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosNaoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
