import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
interface Item {
  amount: number;
  isSelected: boolean;
}
@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.page.html',
  styleUrls: ['./confirm-transaction.page.scss'],
})
export class ConfirmTransactionPage implements OnInit {
  @ViewChild('progressIndicator', { static: false }) progressIndicator!: ElementRef<HTMLDivElement>;
  items: Item[] = [
    { amount: 10, isSelected: false },
    { amount: 20, isSelected: false },
    { amount: 50, isSelected: false },
    { amount: 100, isSelected: false },
  ];
  steps: string[] = ['Step 1', 'Step 2'];
  currentStep = 1;
  progressWidth = 0;

  constructor() { }

  getProgress(): number {
    return this.progressWidth;
  }

  toggleSelection(selectedItem: Item) {
    // Deselect all items first
    this.items.forEach(item => {
      if (item !== selectedItem) {
        item.isSelected = false;
      }
    });

    selectedItem.isSelected = !selectedItem.isSelected;
  }

  private animateProgressBar(): void {
    this.progressWidth = (this.currentStep + 1) * (100 / this.steps.length);
    if (this.progressIndicator) {
      this.progressIndicator.nativeElement.classList.add('animate');
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.animateProgressBar();
      this.getProgress();
    }, 100);
  }

}
