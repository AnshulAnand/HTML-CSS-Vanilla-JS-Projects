const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");
const numberInput = document.getElementById("number-input");
const submitBtn = document.getElementById("submit-btn");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

let password = "";

submitBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const filter = {
    length: numberInput.value,
    uppercase: upperCase.checked,
    lowercase: lowerCase.checked,
    numbers: numbers.checked,
    symbols: symbols.checked,
  };

  var arr = [];

  if (filter.uppercase == true) {
    arr.push(generateUpperCase);
  }
  if (filter.lowercase == true) {
    arr.push(generateLowerCase);
  }
  if (filter.numbers == true) {
    arr.push(generateNumber);
  }
  if (filter.symbols == true) {
    arr.push(generateSymbol);
  }

  let i = 0;

  if (arr.length == 1) {
    while (i < filter.length) {
      for (let j = 0; j < arr.length; j++) {
        arr[j]();
      }

      i++;
    }
  } else {
    while (i < Math.round(filter.length / 2)) {
      for (let j = 0; j < arr.length; j++) {
        arr[j]();
      }

      i++;
    }
  }

  output.innerText = password.slice(0, filter.length);
  arr = [];
  password = "";
}

function generateUpperCase() {
  password += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generateLowerCase() {
  password += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function generateNumber() {
  password += String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function generateSymbol() {
  password += String.fromCharCode(Math.floor(Math.random() * 7 + 33));
}

copyBtn.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  var copyText = document.getElementById("copy-to-clipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.innerText);

  document.getElementById("showCopyText").style.display = "block";
  setTimeout(() => {
    document.getElementById("showCopyText").style.display = "none";
  }, 2000);
}
