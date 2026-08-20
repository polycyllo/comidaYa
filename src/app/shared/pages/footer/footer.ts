import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { FootSocialMedia } from '../../../buguerKing/components/foot-social-media/foot-social-media';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
}
