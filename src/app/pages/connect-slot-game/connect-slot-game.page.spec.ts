import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectSlotGamePage } from './connect-slot-game.page';

describe('ConnectSlotGamePage', () => {
  let component: ConnectSlotGamePage;
  let fixture: ComponentFixture<ConnectSlotGamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectSlotGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
