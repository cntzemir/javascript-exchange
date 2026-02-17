"use strict";

let acount_money = {
  dolar: 0,
  tl: 0,
  huf: 0,
  euro: 0,
  SetAllMoney: function (which_acount, act, add) {
    //I made 4 lines because it'll long and unreadable in one line
    //which_acount === "Euro" ? act === "+" ? this.euro += add :act === "-" ? this.euro -= add:act === "*" ? this.euro *= add:act === "/" ? this.euro /= add:console.log("Act was false"):console.log("which acount was false")
    which_acount === "Euro"
      ? act === "+"
        ? (this.euro += add)
        : act === "-"
        ? (this.euro -= add)
        : act === "*"
        ? (this.euro *= add)
        : act === "/"
        ? (this.euro /= add)
        : NaN
      : NaN;
    which_acount === "Dolar"
      ? act === "+"
        ? (this.dolar += add)
        : act === "-"
        ? (this.dolar -= add)
        : act === "*"
        ? (this.dolar *= add)
        : act === "/"
        ? (this.dolar /= add)
        : NaN
      : NaN;
    which_acount === "TL"
      ? act === "+"
        ? (this.tl += add)
        : act === "-"
        ? (this.tl -= add)
        : act === "*"
        ? (this.tl *= add)
        : act === "/"
        ? (this.tl /= add)
        : NaN
      : NaN;
    which_acount === "HUF"
      ? act === "+"
        ? (this.huf += add)
        : act === "-"
        ? (this.huf -= add)
        : act === "*"
        ? (this.huf *= add)
        : act === "/"
        ? (this.huf /= add)
        : NaN
      : NaN;
    console.log(`Euro: ${acount_money.euro}
    Tl: ${acount_money.tl}
    Dolar: ${acount_money.dolar}
    Huf: ${acount_money.huf}`);
  },
  setAllMoney0: function () {
    this.dolar = 0;
    this.euro = 0;
    this.tl = 0;
    this.huf = 0;
    console.log("Sıfırlandı Girişe Hazır!");
  },
};
let Current_Acount = {
  Acounts: ["Euro", "Dolar", "TL", "HUF"],
  current_acount: "Euro",
  Setcurrent_acount: function (e) {
    for (let i = 0; i < 4; i++) {
      if (this.Acounts[i] === e) {
        this.current_acount = e;
        console.log(this.current_acount);
      }
    }
  },
};
//--------------------------------------------------------ALL document.query-------------------
const balance__value = document.querySelector(".balance__value");
const try_now_btn = document.querySelector(".try_now_btn");
const change_account_btn = document.querySelector(".change_account_btn");
const balance__label = document.querySelector(".balance__label");
//===================BTN'S================
//--------------------Euro
const modal_euro = document.querySelector(".modal_euro");
const overlay = document.querySelector(".overlay");
const btnCloseModal_euro = document.querySelector(".close-modal_euro");
const btnsOpenModal_euro = document.querySelectorAll(".show-modal_euro");
//---------------------Dolar
const modal_dolar = document.querySelector(".modal_dolar");
const btnCloseModal_dolar = document.querySelector(".close-modal_dolar");
const btnsOpenModal_dolar = document.querySelectorAll(".show-modal_dolar");
//---------------------TL
const modal_tl = document.querySelector(".modal_tl");
const btnCloseModal_tl = document.querySelector(".close-modal_tl");
const btnsOpenModal_tl = document.querySelectorAll(".show-modal_tl");
//---------------------HUF
const modal_huf = document.querySelector(".modal_huf");
const btnCloseModal_huf = document.querySelector(".close-modal_huf");
const btnsOpenModal_huf = document.querySelectorAll(".show-modal_huf");
//---------------------Request
const modal_request = document.querySelector(".modal_request");
const btnCloseModal_request = document.querySelector(".close-modal_request");
const btnsOpenModal_request = document.querySelectorAll(".show-modal_request");
const request = document.querySelector(".request"); //request for add price eventlistener
//===================Change Acount's All================
//-------------------Symbol
const change_sembole = document.querySelector(".balance__value::after");
//--------------------Euro
const dropdown__euro = document.querySelector(".dropdown__euro");
//--------------------Dolar
const dropdown__dolar = document.querySelector(".dropdown__dolar");
//--------------------TL
const dropdown__tl = document.querySelector(".dropdown__tl");
//--------------------HUF
const dropdown__huf = document.querySelector(".dropdown__huf");
//===================Change Money All================
//--------------------Euro
const form_input__euro = document.querySelector(".form_input--euro");
const form__btn__euro_rq = document.querySelector(".form__btn--euro-rq");
const form__btn__euro_ch = document.querySelector(".form__btn--euro-ch");
const form__label__euro_ch = document.querySelector(".form__label--euro-ch");
//--------------------Dolar
const form_input__dolar = document.querySelector(".form_input--dolar");
const form__btn__dolar_rq = document.querySelector(".form__btn--dolar-rq");
const form__btn__dolar_ch = document.querySelector(".form__btn--dolar-ch");
const form__label__dolar_ch = document.querySelector(".form__label--dolar-ch");
//--------------------TL
const form_input__tl = document.querySelector(".form_input--tl");
const form__btn__tl_rq = document.querySelector(".form__btn--tl-rq");
const form__btn__tl_ch = document.querySelector(".form__btn--tl-ch");
const form__label__tl_ch = document.querySelector(".form__label--tl-ch");
//--------------------HUF
const form_input__huf = document.querySelector(".form_input--huf");
const form__btn__huf_rq = document.querySelector(".form__btn--huf-rq");
const form__btn__huf_ch = document.querySelector(".form__btn--huf-ch");
const form__label__huf_ch = document.querySelector(".form__label--huf-ch");

//--------------------------------------------All Function's
//===================BTN'S================
function OpelModal_all(which_btn) {
  if (which_btn === "Euro") {
    modal_euro.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (which_btn === "Dolar") {
    modal_dolar.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (which_btn === "TL") {
    modal_tl.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (which_btn === "HUF") {
    modal_huf.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (which_btn === "Request") {
    modal_request.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}
function CloseModal_all(which_btn) {
  if (which_btn === "Euro") {
    modal_euro.classList.add("hidden");
    overlay.classList.add("hidden");
  } else if (which_btn === "Dolar") {
    modal_dolar.classList.add("hidden");
    overlay.classList.add("hidden");
  } else if (which_btn === "TL") {
    modal_tl.classList.add("hidden");
    overlay.classList.add("hidden");
  } else if (which_btn === "HUF") {
    modal_huf.classList.add("hidden");
    overlay.classList.add("hidden");
  } else if (which_btn === "Request") {
    modal_request.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}
try_now_btn.addEventListener("click", function () {
  acount_money.setAllMoney0();
  setBTNs("Request");
  setBTNs("Euro");
  change_account_btn.classList.remove("hidden");
  balance__label.classList.remove("hidden");
  balance__value.classList.remove("hidden");
});
//===================Change Acount's All================
let CurrencyText_Symbol = {
  Euro: ["€", "Euro"],
  Dolar: ["$", "Dolar"],
  TL: ["₺", "TL"],
  HUF: ["Ft", "HUF"],
  SetText_Symbol: function () {
    if (Current_Acount.current_acount === "Euro") {
      alert(`Hesabınız ${Current_Acount.current_acount} Hesabına Geçmiştir`);
      document.documentElement.style.setProperty(
        "--currency-symbol",
        `"${this.Euro[0]}"`
      );
      document.documentElement.style.setProperty(
        "--currency-text",
        `"${this.Euro[1]}"`
      );
      balance__value.textContent = acount_money.euro;
    } else if (Current_Acount.current_acount === "Dolar") {
      alert(`Hesabınız ${Current_Acount.current_acount} Hesabına Geçmiştir`);
      document.documentElement.style.setProperty(
        "--currency-symbol",
        `"${this.Dolar[0]}"`
      );
      document.documentElement.style.setProperty(
        "--currency-text",
        `"${this.Dolar[1]}"`
      );
      balance__value.textContent = acount_money.dolar;
    } else if (Current_Acount.current_acount === "TL") {
      alert(`Hesabınız ${Current_Acount.current_acount} Hesabına Geçmiştir`);
      document.documentElement.style.setProperty(
        "--currency-symbol",
        `"${this.TL[0]}"`
      );
      document.documentElement.style.setProperty(
        "--currency-text",
        `"${this.TL[1]}"`
      );
      balance__value.textContent = acount_money.tl;
    } else if (Current_Acount.current_acount === "HUF") {
      alert(`Hesabınız ${Current_Acount.current_acount} Hesabına Geçmiştir`);
      document.documentElement.style.setProperty(
        "--currency-symbol",
        `"${this.HUF[0]}"`
      );
      document.documentElement.style.setProperty(
        "--currency-text",
        `"${this.HUF[1]}"`
      );
      balance__value.textContent = acount_money.huf;
    }
  },
};
function setBTNs(e) {
  const allBtns = [
    { name: "Euro", btns: btnsOpenModal_euro },
    { name: "TL", btns: btnsOpenModal_tl },
    { name: "Dolar", btns: btnsOpenModal_dolar },
    { name: "HUF", btns: btnsOpenModal_huf },
    { name: "Request", btns: btnsOpenModal_request },
  ];
  allBtns.forEach((group) => {
    if (group.name === e) {
      group.btns.forEach((btn) => btn.classList.add("hidden"));
    } else {
      group.btns.forEach((btn) => btn.classList.remove("hidden"));
    }
  });
}
//====================Change Money All==================
function ChangeMoney(transfer_acount) {
  let addprice;
  if (transfer_acount === "Euro") {
    addprice = Number(form_input__euro.value);
  } else if (transfer_acount === "Dolar") {
    addprice = Number(form_input__dolar.value);
  } else if (transfer_acount === "TL") {
    addprice = Number(form_input__tl.value);
  } else if (transfer_acount === "HUF") {
    addprice = Number(form_input__huf.value);
  }
  //Euro
  if (
    transfer_acount === "Euro" &&
    Current_Acount.current_acount === "Dolar" &&
    acount_money.dolar >= addprice
  ) {
    acount_money.SetAllMoney("Euro", "+", addprice);
    acount_money.SetAllMoney("Dolar", "-", addprice);
    balance__value.textContent = acount_money.dolar;
    CloseModal_all("Euro");
  } else if (
    transfer_acount === "Euro" &&
    Current_Acount.current_acount === "TL" &&
    acount_money.tl >= addprice
  ) {
    acount_money.SetAllMoney("Euro", "+", addprice / 40);
    acount_money.SetAllMoney("TL", "-", addprice);
    balance__value.textContent = acount_money.tl;
    CloseModal_all("Euro");
  } else if (
    transfer_acount === "Euro" &&
    Current_Acount.current_acount === "HUF" &&
    acount_money.huf >= addprice
  ) {
    acount_money.SetAllMoney("Euro", "+", addprice / 450);
    acount_money.SetAllMoney("HUF", "-", addprice);
    balance__value.textContent = acount_money.huf;
    CloseModal_all("Euro");
    //Dolar
  } else if (
    transfer_acount === "Dolar" &&
    Current_Acount.current_acount === "Euro" &&
    acount_money.euro >= addprice
  ) {
    acount_money.SetAllMoney("Dolar", "+", addprice);
    acount_money.SetAllMoney("Euro", "-", addprice);
    balance__value.textContent = acount_money.euro;
    CloseModal_all("Dolar");
  } else if (
    transfer_acount === "Dolar" &&
    Current_Acount.current_acount === "TL" &&
    acount_money.tl >= addprice
  ) {
    acount_money.SetAllMoney("Dolar", "+", addprice / 40);
    acount_money.SetAllMoney("TL", "-", addprice);
    balance__value.textContent = acount_money.tl;
    CloseModal_all("Dolar");
  } else if (
    transfer_acount === "Dolar" &&
    Current_Acount.current_acount === "HUF" &&
    acount_money.huf >= addprice
  ) {
    acount_money.SetAllMoney("Dolar", "+", addprice / 450);
    acount_money.SetAllMoney("HUF", "-", addprice);
    balance__value.textContent = acount_money.huf;
    CloseModal_all("Dolar");
    //TL
  } else if (
    transfer_acount === "TL" &&
    Current_Acount.current_acount === "Dolar" &&
    acount_money.dolar >= addprice
  ) {
    acount_money.SetAllMoney("TL", "+", addprice * 40);
    acount_money.SetAllMoney("Dolar", "-", addprice);
    balance__value.textContent = acount_money.dolar;
    CloseModal_all("TL");
  } else if (
    transfer_acount === "TL" &&
    Current_Acount.current_acount === "Euro" &&
    acount_money.euro >= addprice
  ) {
    acount_money.SetAllMoney("TL", "+", addprice * 40);
    acount_money.SetAllMoney("Euro", "-", addprice);
    balance__value.textContent = acount_money.euro;
    CloseModal_all("TL");
  } else if (
    transfer_acount === "TL" &&
    Current_Acount.current_acount === "HUF" &&
    acount_money.huf >= addprice
  ) {
    acount_money.SetAllMoney("TL", "+", addprice / 10);
    acount_money.SetAllMoney("HUF", "-", addprice);
    balance__value.textContent = acount_money.huf;
    CloseModal_all("TL");
    //HUF
  } else if (
    transfer_acount === "HUF" &&
    Current_Acount.current_acount === "Dolar" &&
    acount_money.dolar >= addprice
  ) {
    acount_money.SetAllMoney("HUF", "+", addprice * 450);
    acount_money.SetAllMoney("Dolar", "-", addprice);
    balance__value.textContent = acount_money.dolar;
    CloseModal_all("HUF");
  } else if (
    transfer_acount === "HUF" &&
    Current_Acount.current_acount === "Euro" &&
    acount_money.euro >= addprice
  ) {
    acount_money.SetAllMoney("HUF", "+", addprice * 450);
    acount_money.SetAllMoney("Euro", "-", addprice);
    balance__value.textContent = acount_money.euro;
    CloseModal_all("HUF");
  } else if (
    transfer_acount === "HUF" &&
    Current_Acount.current_acount === "TL" &&
    acount_money.tl >= addprice
  ) {
    acount_money.SetAllMoney("HUF", "+", addprice * 10);
    acount_money.SetAllMoney("TL", "-", addprice);
    balance__value.textContent = acount_money.tl;
    CloseModal_all("HUF");
  }
}
//----------------------------------------------Button's Settings
//----------------Euro Button's Settings
for (let i = 0; i < btnsOpenModal_euro.length; i++)
  btnsOpenModal_euro[i].addEventListener("click", function () {
    OpelModal_all("Euro");
  });
btnCloseModal_euro.addEventListener("click", function () {
  CloseModal_all("Euro");
});
overlay.addEventListener("click", function () {
  CloseModal_all("Euro");
});
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modal_euro.classList.contains("hidden")
    ? CloseModal_all("Euro")
    : NaN;
});

//----------------Dolar Button's Settings
for (let i = 0; i < btnsOpenModal_dolar.length; i++)
  btnsOpenModal_dolar[i].addEventListener("click", function () {
    OpelModal_all("Dolar");
  });
btnCloseModal_dolar.addEventListener("click", function () {
  CloseModal_all("Dolar");
});
overlay.addEventListener("click", function () {
  CloseModal_all("Dolar");
});
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modal_dolar.classList.contains("hidden")
    ? CloseModal_all("Dolar")
    : NaN;
});

//----------------TL Button's Settings
for (let i = 0; i < btnsOpenModal_tl.length; i++)
  btnsOpenModal_tl[i].addEventListener("click", function () {
    OpelModal_all("TL");
  });
btnCloseModal_tl.addEventListener("click", function () {
  CloseModal_all("TL");
});
overlay.addEventListener("click", function () {
  CloseModal_all("TL");
});
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modal_tl.classList.contains("hidden")
    ? CloseModal_all("TL")
    : NaN;
});

//----------------HUF Button's Settings
for (let i = 0; i < btnsOpenModal_huf.length; i++)
  btnsOpenModal_huf[i].addEventListener("click", function () {
    OpelModal_all("HUF");
  });
btnCloseModal_huf.addEventListener("click", function () {
  CloseModal_all("HUF");
});
overlay.addEventListener("click", function () {
  CloseModal_all("HUF");
});
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modal_huf.classList.contains("hidden")
    ? CloseModal_all("HUF")
    : NaN;
});

//----------------Request Button's Settings
for (let i = 0; i < btnsOpenModal_request.length; i++)
  btnsOpenModal_request[i].addEventListener("click", function () {
    OpelModal_all("Request");
  });
btnCloseModal_request.addEventListener("click", function () {
  CloseModal_all("Request");
});
overlay.addEventListener("click", function () {
  CloseModal_all("Request");
});
document.addEventListener("keydown", function (e) {
  e.key === "Escape" && !modal_request.classList.contains("hidden")
    ? CloseModal_all("Request")
    : NaN;
});

//----------------Request Button's İnside of Settings add price
const addMoney = request.addEventListener("click", function () {
  const request_price = document.querySelector(".form__input--amount"); //You Can Add Current Acount Infinity Money!
  acount_money.SetAllMoney(
    Current_Acount.current_acount,
    "+",
    Number(request_price.value)
  );
  request_price.value = "";
  if (Current_Acount.current_acount === "Euro") {
    balance__value.textContent = acount_money.euro;
  } else if (Current_Acount.current_acount === "Dolar") {
    balance__value.textContent = acount_money.euro;
  } else if (Current_Acount.current_acount === "TL") {
    balance__value.textContent = acount_money.tl;
  } else if (Current_Acount.current_acount === "HUF") {
    balance__value.textContent = acount_money.huf;
  }
  CloseModal_all("Request");
});
//----------------------------------------------Change Acount's All
//----------------------------------Change Acount Euro
const change_acount_euro = dropdown__euro.addEventListener(
  "click",
  function () {
    Current_Acount.Setcurrent_acount("Euro");
    CurrencyText_Symbol.SetText_Symbol();
    setBTNs("Euro");
  }
);
//----------------------------------Change Acount Dolar
const change_acount_dolar = dropdown__dolar.addEventListener(
  "click",
  function () {
    Current_Acount.Setcurrent_acount("Dolar");
    CurrencyText_Symbol.SetText_Symbol();
    setBTNs("Dolar");
  }
);
//----------------------------------Change Acount TL
const change_acount_tl = dropdown__tl.addEventListener("click", function () {
  Current_Acount.Setcurrent_acount("TL");
  CurrencyText_Symbol.SetText_Symbol();
  setBTNs("TL");
});
//----------------------------------Change Acount HUF
const change_acount_huf = dropdown__huf.addEventListener("click", function () {
  Current_Acount.Setcurrent_acount("HUF");
  CurrencyText_Symbol.SetText_Symbol();
  setBTNs("HUF");
});
//-------------------------------------------------------ChangeMoney All
//----------------------------------Para Değiştirme(Euro)
form__btn__euro_ch.addEventListener("click", function () {
  ChangeMoney("Euro");
});
//----------------------------------Para Değiştirme(Dolar)
form__btn__dolar_ch.addEventListener("click", function () {
  ChangeMoney("Dolar");
});
//----------------------------------Para Değiştirme(TL)
form__btn__tl_ch.addEventListener("click", function () {
  ChangeMoney("TL");
});
//----------------------------------Para Değiştirme(HUF)
form__btn__huf_ch.addEventListener("click", function () {
  ChangeMoney("HUF");
});
