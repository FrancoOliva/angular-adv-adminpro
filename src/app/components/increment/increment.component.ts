import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent {
  @Input() progress: number = 10;

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
  }
}
