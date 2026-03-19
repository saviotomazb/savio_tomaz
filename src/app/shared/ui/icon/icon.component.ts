import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { IconName } from './icon.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 'w-5 h-5';
}