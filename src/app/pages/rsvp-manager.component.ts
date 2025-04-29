import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { v4 as uuid }   from 'uuid';
import { RsvpService }  from '../services/rsvp.service';

@Component({
  standalone: true,
  selector: 'app-rsvp-manager',
  templateUrl: './rsvp-manager.component.html',
  styleUrls: ['./rsvp-manager.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class RsvpManagerComponent {
  name   = signal('');                                // ← SIGNAL
  status = signal<'Yes' | 'No' | 'Maybe'>('Yes');     // ← SIGNAL

  constructor(public rsvp: RsvpService) {}

  submit() {
    this.rsvp.upsert({
      id: uuid(),
      displayName: this.name(),
      status: this.status(),
    });
    this.name.set('');
  }
}
