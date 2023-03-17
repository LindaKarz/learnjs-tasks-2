let button = document.querySelector("button");
let formDiv = document.querySelector("#prompt-form-container");
let form = document.querySelector("#prompt-form");
let message = document.querySelector("#prompt-message");

button.addEventListener("click", () => {
    showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert(value);
  });
})

function showPrompt(html, callback) {
  formDiv.hidden = false
  form.text.focus()
  message.innerHTML = html
  document.body.style.backgroundColor = "gray";
  form.addEventListener("submit", (event) => {

    if (form.text.value === "") {
      event.preventDefault()
      return
    }

    callback(form.text.value)
  })

  form.cancel.addEventListener("click", () => {
    callback(null);
    formDiv.hidden = true;
    document.body.removeAttribute("style");
  })

  window.addEventListener("keydown", (event) => {
  let active = document.activeElement;
    if (event.code === 'Tab' && event.shiftKey && active === form.text) {
      event.preventDefault()
      form.cancel.focus();
    }
    if (event.code === 'Tab' && !event.shiftKey && active === form.cancel) {
      event.preventDefault()
      form.text.focus();
    }
  })
}