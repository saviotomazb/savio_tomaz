import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { IconName } from './icon.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size: string = 'w-5 h-5';
}