const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN = "hidden";
const USERNAME = "username"


function subMit(info) {
    info.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

const saveUserName = localStorage.getItem(USERNAME);

if(saveUserName === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", subMit);
} else {
    paintGreetings(saveUserName)
}