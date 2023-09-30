const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const emailField = document.getElementById("mail");
  const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  let valid = true;

  if (!emailField.value || !emailField.value.match(regex)) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  }
  return valid;
}
