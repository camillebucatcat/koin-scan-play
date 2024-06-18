import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanToPlayPage } from './scan-to-play.page';

describe('ScanToPlayPage', () => {
  let component: ScanToPlayPage;
  let fixture: ComponentFixture<ScanToPlayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanToPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
