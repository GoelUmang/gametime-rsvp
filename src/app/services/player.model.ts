import { RsvpStatus } from './rsvp-status.model';

export interface Player {
  id: string;           // unique GUID or DB id
  displayName: string;  // player nickname
  status: RsvpStatus;   // Yes / No / Maybe
}
