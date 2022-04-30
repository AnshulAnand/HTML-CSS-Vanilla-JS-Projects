const form = document.getElementById("input-container");
form.addEventListener("submit", getPin);

const result = document.querySelector("body");

function getPin(e) {
  const pin = document.getElementById("input").value;

  fetch(`https://api.postalpincode.in/pincode/${pin}`)
    .then((response) => {
      //   if (response.status != 200) {
      //     if (document.getElementById("result-found") != null) {
      //       document.getElementById("result-found").remove();
      //     }
      //     if (document.getElementById("result-not-found") != null) {
      //       document.getElementById("result-not-found").remove();
      //     }
      //     result.innerHTML += `
      //         <div id="result-not-found">
      //         <p>Invalid PIN</p>
      //         </div>
      //         `;
      //   } else {
      return response.json();
      //   }
    })
    .then((data) => {
      if (data[0].Status == "Error") {
        if (document.getElementById("result-found") != null) {
          document.getElementById("result-found").remove();
        }
        if (document.getElementById("result-not-found") != null) {
          document.getElementById("result-not-found").remove();
        }
        result.innerHTML += `
            <div id="result-not-found">
            <p>Invalid PIN</p>
            </div>
            `;
      } else {
        if (document.getElementById("result-not-found") != null) {
          document.getElementById("result-not-found").remove();
        }
        if (document.getElementById("result-found") != null) {
          document.getElementById("result-found").remove();
        }
        result.innerHTML += `
        <div id="result-found">
        <div id="header">
          <p>Valid PIN</p>
          <button id="close-btn" onclick="deleteInfo()" >X</button>
        </div>
        <div id="info-container">
          <li>Circle: ${data[0].PostOffice[0].Circle}</li>
          <li>District: ${data[0].PostOffice[0].District}</li>
          <li>Division: ${data[0].PostOffice[0].Division}</li>
          <li>Region: ${data[0].PostOffice[0].Region}</li>
          <li>State: ${data[0].PostOffice[0].State}</li>
          <li>Country: ${data[0].PostOffice[0].Country}</li>
          <li>Pincode: ${data[0].PostOffice[0].Pincode}</li>
        </div>
      </div>
        `;
      }
    });

  e.preventDefault();
}

function deleteInfo() {
  document.getElementById("result-found").remove();
}
