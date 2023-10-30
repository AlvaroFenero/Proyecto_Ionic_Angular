import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { VistaProfesorPage } from './vista_profesor.page';

describe('VistaProfesorPage', () => {
  let component: VistaProfesorPage;
  let fixture: ComponentFixture<VistaProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
