import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-checklist",
  template: `
    <h1>Checklist</h1>
    <ul>
      <li *ngFor="let item of checklistItems">{{ item }}</li>
    </ul>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `],
})

export class ChecklistComponent {
  checklistItems: string[] = ['Item 1', 'Item 2', 'Item 3'];    

  addItem(newItem: string) {
    this.checklistItems.push(newItem);
  }
  removeItem(itemToRemove: string) {
    this.checklistItems = this.checklistItems.filter(item => item !== itemToRemove);
  } 
    constructor() {
        console.log('ChecklistComponent initialized');
    }
  
}// This component is a simple checklist that allows adding and removing items.