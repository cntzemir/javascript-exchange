# JavaScript Exchange

A **currency exchange practice app** built with **Vanilla JavaScript**.  
This project started as an early prototype and was later **refactored** to improve structure, correctness, and UX — focusing on clean state management, validation, and a more “product-like” UI.

## Live Demo
- Demo: https://cntzemir.github.io/javascript-exchange/

## Screenshots
![Exchange UI](docs/screenshots/exchange-ui.png)
![Convert Flow](docs/screenshots/convert.png)
![Request Money Flow](docs/screenshots/request-money.png)
![Example Exchange](docs/screenshots/example-exchange.png)

## Key Features
- Wallet balances overview (dashboard-style UI)
- Convert between currencies using a **base-currency conversion model**
- Request money flow inside the same modal system
- Input validation with **inline error messages** (no `alert()` UX)
- Keyboard shortcuts (polished interactions)
  - `Enter` submit
  - `Esc` close modal

## Tech Stack
- HTML
- CSS
- JavaScript (Vanilla)

## Project Structure
```text
.
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  └─ js/
│     └─ app.js
├─ docs/
│  └─ screenshots/
├─ CHANGELOG.md
├─ LICENSE
└─ README.md
