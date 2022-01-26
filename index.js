const userForm = document.querySelector("form");
const userInputs = document.querySelectorAll("input");

// const userFirstNameInput = document.querySelector("#firstName");
// const userLastNameInput = document.querySelector("#lastName");
const userEmailInput = document.querySelector("#email");
// const userPasswordInput = document.querySelector("#password");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  userInputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.setAttribute("aria-invalid", true);
      input.setAttribute("placeholder", "");
      input.nextElementSibling.nextElementSibling.innerText =
        input.getAttribute("data-details") + " cannot be empty";
    } else {
      input.setAttribute("aria-invalid", false);
      input.setAttribute("placeholder", input.getAttribute("data-details"));
      input.nextElementSibling.nextElementSibling.innerText = "";
    }
  });
  if (userEmailInput.getAttribute("aria-invalid") !== "true") {
    const emailValue = userEmailInput.value;
    if (
      (emailValue.match(/@/g) || []).length !== 1 ||
      emailValue.split(".").length !== 2 ||
      emailValue.split("@")[0].trim() === "" ||
      emailValue.split("@")[1].split(".")[0].trim() === "" ||
      emailValue.split(".")[1] !== "com"
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
