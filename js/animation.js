const login_form = document.querySelector("#login-form");
const mokoko = document.querySelector("#mokoko");
const muse = document.querySelector("#muse");

function login(event) {
  event.preventDefault();

  mokoko.classList.add("animation-none");
  muse.classList.add("animation-add");

  setTimeout(submit, 1800);
}
function submit() {
  login_form.submit();
}

login_form.addEventListener("submit", login);
