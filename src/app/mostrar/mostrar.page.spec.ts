import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MostrarPage } from './mostrar.page';

describe('MostrarPage', () => {
  let component: MostrarPage;
  let fixture: ComponentFixture<MostrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
