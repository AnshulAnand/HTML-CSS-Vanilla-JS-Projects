const select = document.getElementById("select");
select.addEventListener("click", getSelection);

const input = document.getElementById("input");
input.addEventListener("input", getFacts);

function getSelection() {
  const info = document.getElementById("info");
  info.innerHTML = `<p>Enter a ${select.value} to get a random fact</p>`;

  input.value = "";
  document.getElementById("fact").innerHTML = "";
}

async function getFacts(e) {
  if (select.value == "Number") {
    var selectValue = "trivia";
  } else {
    selectValue = select.value.toLowerCase();
  }
  await fetch(`http://numbersapi.com/${e.target.value}/${selectValue}`)
    .then((response) => response.text())
    .then((data) => {
      const fact = document.getElementById("fact");
      fact.innerHTML = "";
      fact.innerHTML += `
        <h2>${select.value} Fact</h2>
        <p>${data}</p>
        `;
    });
}
