import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaApoderadoPage } from './vista_apoderado.page';

describe('VistaApoderadoPage', () => {
  let component: VistaApoderadoPage;
  let fixture: ComponentFixture<VistaApoderadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaApoderadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
