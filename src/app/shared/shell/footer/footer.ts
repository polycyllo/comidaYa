import { Component } from '@angular/core';
import { FootSocialMedia } from '../../../buguerKing/components/foot-social-media/foot-social-media';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
}
