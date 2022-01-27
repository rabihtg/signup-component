// Done - Set max char for each email part
// Done - Check the problem with regex taking so long to compute on long domain names

const userForm = document.querySelector("form");
const userInputs = document.querySelectorAll("input");

const userEmailInput = document.querySelector("#email");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  userInputs.forEach((input) => {
    let realValue = input.value;
    if (input.getAttribute("data-details") !== "Password") {
      realValue = input.value.trim();
    }
    if (realValue === "") {
      input.setAttribute("aria-invalid", true);
      input.setAttribute("placeholder", "");
      input.nextElementSibling.nextElementSibling.innerText =
        input.getAttribute("data-details") + " cannot be empty";
    } else {
      input.setAttribute("aria-invalid", false);
      input.setAttribute("placeholder", input.getAttribute("data-details"));
      input.nextElementSibling.nextElementSibling.innerText = "";
    }

    console.log(input.value);
  });
  if (userEmailInput.getAttribute("aria-invalid") !== "true") {
    const emailValue = userEmailInput.value;
    const validEmailRegx =
      /(^[a-zA-Z0-9]{1,}([!#$%&'*+-/=_`?^{|.][a-zA-Z0-9]{1,})*?)+@([a-zA-Z0-9]([-.][a-zA-Z0-9])*){1,}\.[a-zA-Z]{2,3}$/g;
    if (
      !emailValue.match(validEmailRegx) ||
      emailValue.split("@")[0].length > 64 ||
      emailValue.split("@")[1].split(".")[0].length > 253
    ) {
      userEmailInput.setAttribute("aria-invalid", true);
      userEmailInput.nextElementSibling.nextElementSibling.innerText =
        "Looks like this is not an email";
    }
  }
});

userInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.setAttribute("aria-invalid", false);
    input.setAttribute("placeholder", input.getAttribute("data-details"));
    input.nextElementSibling.nextElementSibling.innerText = "";
  });
});
