import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmTransactionPage } from './confirm-transaction.page';

describe('ConfirmTransactionPage', () => {
  let component: ConfirmTransactionPage;
  let fixture: ComponentFixture<ConfirmTransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
