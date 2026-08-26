import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideIcon } from '@lucide/angular';

@Component({
  selector: 'nav-options',
  imports: [NgComponentOutlet],
  templateUrl: './nav-options.html',
})
export class NavOptions {
  label = input.required<string>();
  icon = input<LucideIcon>();
}
