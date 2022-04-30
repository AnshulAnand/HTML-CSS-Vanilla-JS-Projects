const form = document.querySelector(".input-container");
form.addEventListener("submit", saveBookmark);

getBookmarks();

function saveBookmark(e) {
  var name = document.querySelector("#site-name").value;
  var url = document.querySelector("#site-url").value;

  if (!validateForm(name, url)) {
    return false;
  }
  var bookmark = {
    name: name,
    url: url,
  };
  if (localStorage.getItem("bookmarks") == null) {
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  form.reset();

  getBookmarks();

  e.preventDefault();
}

function getBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  var bookmarkContainer = document.querySelector(".bookmarks-container");
  bookmarkContainer.innerHTML = "";
  bookmarks.forEach((element) => {
    bookmarkContainer.innerHTML +=
      '<div class="bookmarks">' +
      '<a href="' +
      addhttp(element.url) +
      '" target="_blank" class="tooltip">' +
      element.name +
      "<sup" +
      '><i class="bi bi-box-arrow-up-right"></i' +
      '><span class="tooltiptext">' +
      addhttp(element.url) +
      "</span></sup" +
      "></a" +
      ">" +
      "<button onclick=\"deleteBookmark('" +
      element.url +
      "')\" >Delete</button>" +
      "</div>";
  });
}

function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarks.forEach((element) => {
    if (element.url === url) {
      bookmarks.splice(bookmarks.indexOf(element), 1);
    }
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  getBookmarks();
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  var expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid URL");
    return false;
  }

  return true;
}
function addhttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = "http://" + url;
  }
  return url;
}
