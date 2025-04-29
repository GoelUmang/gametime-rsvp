import { Injectable, signal, computed } from '@angular/core';
import { Player } from '../models/player.model';

/** RSVP state manager (Angular 17 signals) */
@Injectable({ providedIn: 'root' })
export class RsvpService {
  private readonly _players = signal<Player[]>([]);      // ← SIGNAL

  /* public readonly views */
  readonly players   = this._players.asReadonly();
  readonly confirmed = computed(() =>
      this._players().filter(p => p.status === 'Yes'));
  readonly declined  = computed(() =>
      this._players().filter(p => p.status === 'No'));
  readonly totals    = computed(() => ({
    total : this._players().length,
    yes   : this.confirmed().length,
    no    : this.declined().length,
    maybe : this._players().filter(p => p.status === 'Maybe').length,
  }));

  /** pure helper (returns new array) */
  private upsertList(list: Player[], p: Player): Player[] {
    const idx = list.findIndex(x => x.id === p.id);
    return idx === -1 ? [...list, p] : list.map((x,i)=> i===idx ? p : x);
  }

  /** ✅ add or update */
  upsert(player: Player) {
    this._players.set(this.upsertList(this._players(), player));
  }
}
