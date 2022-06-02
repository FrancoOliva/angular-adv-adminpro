import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent {
  @Input() progress: number = 40;
  @Output() value: EventEmitter<number> = new EventEmitter<number>();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      this.value.emit(100);
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.value.emit(0);
      return;
    }
    this.progress = this.progress + value;
    this.value.emit(this.progress);
  }
}
