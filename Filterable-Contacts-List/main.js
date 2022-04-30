const filter = document.querySelector("#filter");
const contacts_container = document.querySelector(".contacts-container");
const loader = document.querySelector(".loader");
const contacts_list = document.querySelectorAll(".contacts-list");
const contact_letter = document.querySelectorAll(".contact-letter");
const listItems = [];
var results = [];
const ul_node_array = [];

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

getData();

filter.addEventListener("input", (e) => filterContacts(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const contacts = await res.json();

  contacts_container.classList.add("hide");

  for (var i in contacts) {
    results.push(contacts[i]);
  }

  results[0].forEach((user) => {
    if (alphabets.includes(user.name.first[0])) {
      const contact = document.querySelector(`#${user.name.first[0]}`);

      const li = document.createElement("li");
      li.classList.add("contact");
      listItems.push(li);

      li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h5>${user.name.first} ${user.name.last}</h5>
        `;

      contact.appendChild(li);
    } else {
      const contact = document.querySelector("#others");

      const li = document.createElement("li");
      li.classList.add("contact");
      listItems.push(li);

      li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <h5>${user.name.first} ${user.name.last}</h5>
        `;

      contact.appendChild(li);
    }

    contacts_container.classList.remove("hide");
    loader.classList.add("hide");
  });

  hideContactsList();
}

function filterContacts(searchTerm) {
  listItems.forEach((contact) => {
    if (contact.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      contact.classList.remove("hide");
    } else {
      contact.classList.add("hide");
    }
  });
}

function hideContactsList() {
  document.querySelectorAll(".contacts-list").forEach((element) => {
    if (element.children.length > 1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
