import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'nav-options',
  imports: [LucideAngularModule],
  templateUrl: './nav-options.html',
})
export class NavOptions {
  label = input.required<string>();
  icon = input.required<LucideIconData>();
}
