import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SecurityFooterComponent} from '../security-footer/security-footer.component';
import {SecurityHeaderComponent} from '../security-header/security-header.component';

@Component({
  selector: 'app-security-context',
  standalone: true,
  imports: [
    RouterOutlet,
    SecurityFooterComponent,
    SecurityHeaderComponent
  ],
  templateUrl: './security-context.component.html',
  styleUrl: './security-context.component.scss'
})
export class SecurityContextComponent {

}
