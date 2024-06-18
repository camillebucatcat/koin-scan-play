import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectTableGamePage } from './connect-table-game.page';

describe('ConnectTableGamePage', () => {
  let component: ConnectTableGamePage;
  let fixture: ComponentFixture<ConnectTableGamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectTableGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
