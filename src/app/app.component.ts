import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatWidgetComponent } from './shared/chat-widget.component'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,              
    ChatWidgetComponent        
  ]
})
export class AppComponent {
  title = 'gametime-rsvp';
}
