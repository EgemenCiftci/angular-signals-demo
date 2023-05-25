import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _operator = signal('+');

  get operator(): string {
    return this._operator();
  }

  set operator(value: string) {
    this._operator.set(value);
  }

  private _a = signal(1);

  get a(): number {
    return this._a();
  }

  set a(value: number) {
    this._a.set(value);
  }

  private _b = signal(2);

  get b(): number {
    return this._b();
  }

  set b(value: number) {
    this._b.set(value);
  }

  c = computed(() => this.calculate(this.a, this.b, this.operator));

  calculate(a: number, b: number, operator: string): number {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 0;
    }
  }
}
