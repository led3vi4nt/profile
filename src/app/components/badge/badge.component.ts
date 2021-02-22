
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() badgeId: string = "";
  @Input() class: string = "";
  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.clickEvent.emit(null);
  }
}
