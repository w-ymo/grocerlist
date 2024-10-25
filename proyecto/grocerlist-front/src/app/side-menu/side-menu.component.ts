import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
    @Input() visible: boolean = false;

    @Output() toggleActiveEvent = new EventEmitter<boolean>();

    toggleMenu(){
      this.visible = !this.visible;
      this.toggleActiveEvent.emit(this.visible);
    }
}
