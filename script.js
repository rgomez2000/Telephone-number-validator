const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  let value = input.value;
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if(!value) {
    alert("Please provide a phone number");
  } else if (regex.test(value) === true) {
    results.innerText = `Valid US number: ${value}`;
  } else {
    results.innerText = `Invalid US number: ${value}`
  }
});

clearBtn.addEventListener("click", () => results.innerText = "");

/*
  Optional one with a space => (1\s?)?
  Three digits with optional parenthesis => (\(\d{3}\)|\d{3})
  Optional hyphen or space => ([\s-]?)
  Three digits => \d{3}
  Another optional hyphen or space => ([\s-]?)
  Four digits => \d{4}
*/