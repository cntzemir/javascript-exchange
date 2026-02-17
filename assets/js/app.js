"use strict";

const CURRENCIES = ["EUR", "USD", "HUF", "TRY"];

const SYMBOL = {
  EUR: "€",
  USD: "$",
  HUF: "Ft",
  TRY: "₺",
};

const BASE_PER_EUR = {
  EUR: 1,
  USD: 1.08,
  HUF: 390,
  TRY: 35,
};

const dom = {
  tabs: document.getElementById("currencyTabs"),
  btnTry: document.getElementById("btnTry"),
  btnConvert: document.getElementById("btnConvert"),
  btnRequest: document.getElementById("btnRequest"),
  rateChip: document.getElementById("rateChip"),

  activeSymbol: document.getElementById("activeSymbol"),
  activeAmount: document.getElementById("activeAmount"),
  activeCode: document.getElementById("activeCode"),
  statusText: document.getElementById("statusText"),
  balancesGrid: document.getElementById("balancesGrid"),

  overlay: document.getElementById("overlay"),
  modal: document.getElementById("modal"),
  modalTitle: document.getElementById("modalTitle"),
  btnClose: document.getElementById("btnClose"),
  amountInput: document.getElementById("amountInput"),
  amountLabel: document.getElementById("amountLabel"),
  toField: document.getElementById("toField"),
  toSelect: document.getElementById("toSelect"),
  errorBox: document.getElementById("errorBox"),
  btnSubmit: document.getElementById("btnSubmit"),
};

const state = {
  enabled: false,
  active: "EUR",
  balances: { EUR: 0, USD: 0, HUF: 0, TRY: 0 },
  mode: null,
};

function formatMoney(n, code) {
  const abs = Math.abs(n);
  if (code === "HUF" || abs >= 1000) return n.toFixed(0);
  return n.toFixed(2);
}

function setError(msg) {
  if (!msg) {
    dom.errorBox.classList.add("is-hidden");
    dom.errorBox.textContent = "";
    return;
  }
  dom.errorBox.textContent = msg;
  dom.errorBox.classList.remove("is-hidden");
}

function parseAmount(value) {
  const v = String(value).trim().replace(",", ".");
  const n = Number(v);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

function convertAmount(amount, from, to) {
  const fromPerEur = BASE_PER_EUR[from];
  const toPerEur = BASE_PER_EUR[to];
  const eurValue = amount / fromPerEur;
  return eurValue * toPerEur;
}

function render() {
  dom.activeSymbol.textContent = SYMBOL[state.active];
  dom.activeCode.textContent = state.active;
  dom.activeAmount.textContent = formatMoney(state.balances[state.active], state.active);

  dom.btnConvert.disabled = !state.enabled;
  dom.btnRequest.disabled = !state.enabled;

  dom.statusText.textContent = state.enabled
    ? "Choose an action: Convert or Request."
    : "Click “Try it now” to enable actions.";

  dom.rateChip.textContent = `1 EUR ≈ $${BASE_PER_EUR.USD} • Ft${BASE_PER_EUR.HUF} • ₺${BASE_PER_EUR.TRY}`;

  dom.balancesGrid.innerHTML = "";
  CURRENCIES.forEach((code) => {
    const card = document.createElement("div");
    card.className = "balance-card";
    card.innerHTML = `
      <div class="balance-card__top">
        <span>${code}</span>
        <span>${SYMBOL[code]}</span>
      </div>
      <div class="balance-card__val">${formatMoney(state.balances[code], code)}</div>
    `;
    dom.balancesGrid.appendChild(card);
  });

  dom.tabs.querySelectorAll(".tab").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.currency === state.active);
  });

  dom.toSelect.querySelectorAll("option").forEach((opt) => {
    opt.disabled = opt.value === state.active;
  });
}

function openModal(mode) {
  state.mode = mode;
  dom.amountInput.value = "";
  setError("");

  if (mode === "request") {
    dom.modalTitle.textContent = `Request to ${state.active}`;
    dom.amountLabel.textContent = `Amount (${state.active})`;
    dom.toField.classList.add("is-hidden");
    dom.btnSubmit.textContent = "Request";
  } else {
    dom.modalTitle.textContent = `Convert from ${state.active}`;
    dom.amountLabel.textContent = `Amount (${state.active})`;
    dom.toField.classList.remove("is-hidden");
    dom.toSelect.value = CURRENCIES.find((c) => c !== state.active) || "EUR";
    dom.btnSubmit.textContent = "Convert";
  }

  dom.overlay.classList.remove("is-hidden");
  dom.modal.classList.remove("is-hidden");
  dom.amountInput.focus();
}

function closeModal() {
  state.mode = null;
  dom.overlay.classList.add("is-hidden");
  dom.modal.classList.add("is-hidden");
  setError("");
}

function handleSubmit() {
  const amount = parseAmount(dom.amountInput.value);
  if (amount === null) {
    setError("Please enter a valid positive amount.");
    return;
  }

  if (state.mode === "request") {
    state.balances[state.active] += amount;
    closeModal();
    render();
    return;
  }

  const to = dom.toSelect.value;
  if (!CURRENCIES.includes(to) || to === state.active) {
    setError("Please select a valid target currency.");
    return;
  }

  if (state.balances[state.active] < amount) {
    setError("Insufficient funds in the active wallet.");
    return;
  }

  const received = convertAmount(amount, state.active, to);

  state.balances[state.active] -= amount;
  state.balances[to] += received;

  closeModal();
  render();
}

dom.btnTry.addEventListener("click", () => {
  state.enabled = true;
  state.balances = { EUR: 0, USD: 0, HUF: 0, TRY: 0 };
  render();
});

dom.tabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  const code = btn.dataset.currency;
  if (!CURRENCIES.includes(code)) return;
  state.active = code;
  render();
});

dom.btnConvert.addEventListener("click", () => openModal("convert"));
dom.btnRequest.addEventListener("click", () => openModal("request"));

dom.btnClose.addEventListener("click", closeModal);
dom.overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Enter" && !dom.modal.classList.contains("is-hidden")) handleSubmit();
});

dom.btnSubmit.addEventListener("click", handleSubmit);

render();
