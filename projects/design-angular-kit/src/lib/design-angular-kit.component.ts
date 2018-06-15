import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'it-design-angular-kit',
  template: `
    <p>
      <button (click)="nonDefaultAction ? onClick.emit($event) : consoleFunction()">{{title}} works!</button>
    </p>
  `,
  styles: []
})
export class DesignAngularKitComponent implements OnInit {
  readonly consoleFunction = () => { console.log('Default action') };
  private nonDefaultAction = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nonDefaultAction = this.onClick.observers.length > 0;
  }

  
}
