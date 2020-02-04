import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent {
  @Input() value: 'X' | 'O';
}
