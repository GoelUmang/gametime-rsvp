# Gametime﻿ Hero — Team RSVP Manager 🗒️

A **stand-alone Angular 17** module that lets community managers quickly track who’s in, out, or maybe for an event.  
Styled to match the look & feel of [gametimehero.com](https://www.gametimehero.com) — same header, bright green CTAs, chat bubble, and subtle grid background.

## ✨ Features
|  ✔ | Description |
|----|-------------|
| **Angular 17 Signals** | Reactive state with zero RxJS subscriptions |
| **SOLID RsvpService** | Pure helpers, typed `Player` & `RsvpStatus` interfaces |
| **Gametime Hero UI**  | Header, CTA buttons, chat FAB, hero grid background |
| **Unit tests**        | Jasmine spec for service add / update logic |
| **One-click deploy**  | `ng deploy` → GitHub Pages |
---

## Live Preview

<p align="center">
  <img src="assets/Gametime_Hero_rsvp.png" width="720" alt="RSVP Manager demo">
</p>
## 🚀 Quick Start

```bash
# prerequisites
node --version   # v20 LTS
npm i -g @angular/cli@17

# clone & run
git clone https://github.com/<goelumang>/gametime-rsvp.git
cd gametime-rsvp
npm install
npm start      # http://localhost:4200


##Project Structure
src/
 ├─ app/
 │   ├─ models/
 │   │   ├─ player.model.ts
 │   │   └─ rsvp-status.model.ts
 │   ├─ services/
 │   │   └─ rsvp.service.ts
 │   ├─ pages/
 │   │   └─ rsvp-manager.component.*
 │   └─ shared/
 │       └─ chat-widget.component.*
 ├─ assets/
 │   └─ gametime_hero.webp
 └─ styles.scss        # global theme + hero grid background

📜 Tech Stack
Angular 17 (stand-alone APIs)

TypeScript 5

Dart Sass

GitHub Pages for static hosting


