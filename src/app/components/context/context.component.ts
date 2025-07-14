import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss'
})
export class ContextComponent {

}
