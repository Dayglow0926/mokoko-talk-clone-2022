const login_form = document.querySelector("#login-form");
const login_name = document.querySelector("#login-form input");
const mokoko = document.querySelector("#mokoko");
const muse = document.querySelector("#muse");

console.log(login_name.value);

function login(event) {
  event.preventDefault();

  mokoko.classList.add("animation-none");
  muse.classList.add("animation-add");

  localStorage.setItem("mokoko-name", login_name.value);

  setTimeout(submit, 1800);
}
function submit() {
  login_form.submit();
}

login_form.addEventListener("submit", login);
