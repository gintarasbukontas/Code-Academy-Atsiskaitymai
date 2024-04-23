/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.querySelector("#output");
const messagePlaceholder = document.querySelector("#message");
const btn = document.querySelector("#btn");

async function getUsers() {
  const response = await fetch(ENDPOINT);
  const users = response.json();
  return users;
}

async function showUsers() {
  const users = await getUsers();

  messagePlaceholder.remove();

  users.forEach((user) => {
    const usersHolder = document.createElement("div");
    output.append(usersHolder);
    usersHolder.classList.add("usersHolder");

    const login = document.createElement("p");
    usersHolder.append(login);
    login.textContent = `Login: ${user.login}`;

    const avatar = document.createElement("img");
    usersHolder.append(avatar);
    avatar.src = user.avatar_url;
    avatar.classList.add("avatar");
  });
}

btn.addEventListener("click", showUsers);
