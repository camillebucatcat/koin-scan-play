import { Component, OnInit } from '@angular/core';

interface Item {
  amount: number;
  isSelected: boolean;
}
@Component({
  selector: 'app-scan-to-play',
  templateUrl: './scan-to-play.page.html',
  styleUrls: ['./scan-to-play.page.scss'],
})
export class ScanToPlayPage implements OnInit {

  items: Item[] = [
    { amount: 10, isSelected: false },
    { amount: 20, isSelected: false },
    { amount: 50, isSelected: false },
    { amount: 100, isSelected: false },
  ];

  constructor() { }

  toggleSelection(selectedItem: Item) {
    // Deselect all items first
    this.items.forEach(item => {
      if (item !== selectedItem) {
        item.isSelected = false;
      }
    });

    // Toggle the selected state of the clicked item
    selectedItem.isSelected = !selectedItem.isSelected;
  }

  ngOnInit() {
  }

}
