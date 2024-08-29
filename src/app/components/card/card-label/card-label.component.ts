import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css'],
})
export class CardLabelComponent {
  @Input()
  gameLabel: string = '';
}
