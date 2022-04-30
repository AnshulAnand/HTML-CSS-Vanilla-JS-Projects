const kgsInput = document.querySelector(".kgs-input");
const lbsInput = document.querySelector(".lbs-input");
const ozInput = document.querySelector(".oz-input");

kgsInput.addEventListener("input", function (e) {
  fromKgs(e.target.value);
});
lbsInput.addEventListener("input", function (e) {
  fromLbs(e.target.value);
});
ozInput.addEventListener("input", function (e) {
  fromOz(e.target.value);
});

function fromKgs(value) {
  let lbs = value * 2.20462;
  let oz = value * 35.274;
  lbsInput.value = lbs;
  ozInput.value = oz;
}

function fromLbs(value) {
  let kgs = value * 0.453592;
  let oz = value * 16;
  kgsInput.value = kgs;
  ozInput.value = oz;
}

function fromOz(value) {
  let kgs = value * 0.0283495;
  let lbs = value * 0.0625;
  kgsInput.value = kgs;
  lbsInput.value = lbs;
}
