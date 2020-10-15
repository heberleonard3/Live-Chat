const container = document.querySelector(".container");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function start() {
  parte1();
}

function createChat1(username, content, link) {
  const chat = document.createElement("div");
  chat.setAttribute("class", "chat animate__animated animate__slideInLeft");

  const user = document.createElement("div");
  user.setAttribute("class", "user");
  user.textContent = username;

  const text = document.createElement("div");
  text.setAttribute("class", "text");
  if (link) {
    text.innerHTML = `<a href="${link}" class="link-chat" target="_blank"><img src="folder.png" /><p>${content}</p></a>`;
  } else {
    text.textContent = content;
  }

  chat.appendChild(user);
  chat.appendChild(text);
  container.appendChild(chat);
  container.scrollTo(0, container.scrollHeight);
}

function createChat2(username, content, link) {
  const chat = document.createElement("div");
  chat.setAttribute("class", "chat animate__animated animate__slideInLeft");

  const user = document.createElement("div");
  user.setAttribute("class", "user2");
  user.textContent = username;

  const text = document.createElement("div");
  text.setAttribute("class", "text2");
  if (link) {
    text.innerHTML = `<a href="${link}">${content}</a>`;
  } else {
    text.textContent = content;
  }

  chat.appendChild(user);
  chat.appendChild(text);
  container.appendChild(chat);
  container.scrollTo(0, container.scrollHeight);
}

function createInput1(ID) {
  const divInput = document.createElement("div");
  divInput.setAttribute(
    "class",
    "input-chat animate__animated animate__slideInLeft"
  );

  const input = document.createElement("input");
  input.setAttribute("id", ID);

  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", ID);
  button.textContent = "Enviar";

  divInput.appendChild(input);
  divInput.appendChild(button);
  container.appendChild(divInput);

  container.scrollTo(0, container.scrollHeight);
}

function createText(text) {
  const div = document.createElement("div");
  div.setAttribute("class", "text-chat animate__animated animate__slideInLeft");
  div.textContent = text;
  container.appendChild(div);
  container.scrollTo(0, container.scrollHeight);
}

function createLoading(ID) {
  const element = document.createElement("progress");
  element.setAttribute("id", ID);
  element.setAttribute("value", "0");
  element.setAttribute("max", "100");
  element.textContent = "Progress";

  container.appendChild(element);

  let progress = 0,
    incrementSpeed = 1,
    progressBar = document.getElementById(ID),
    progressInterval = setInterval(() => {
      progress = progress + incrementSpeed;
      progressBar.value = progress;

      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 10);

  container.scrollTo(0, container.scrollHeight);
}

async function parte1() {
  await delay(3000);
  createChat1("D", "Hi");
  await delay(3000);
  createChat1("D", "Can you help me?");
  await delay(4000);
  createChat1("D", "I need to find him");
  await delay(4000);
  createChat1("D", "I need the password to access his files");
  await delay(6000);
  createChat1("D", "I found the security question");
  await delay(5000);
  createChat1(
    "D",
    "66 69 72 73 74 20 6c 65 74 74 65 72 20 6f 66 20 6e 61 6d 65"
  );
  await delay(3000);
  createChat1("D", "Can you find out?");
  await delay(3000);
  createInput1("resposta1");
  let input = document.querySelector("input#resposta1");
  let button = document.querySelector("button#resposta1");
  button.addEventListener("click", () => {
    if (input.value === "first letter of name") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte2();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}

async function parte2() {
  await delay(3000);
  createChat1("D", "nice");
  await delay(5000);
  createText("D left the chat");
  await delay(4000);
  createText("L joined the chat");
  await delay(5000);
  createChat2("L", "Why are you helping him?");
  await delay(5000);
  createChat2("L", "You better stop now");
  await delay(6000);
  createChat2("L", "If no...");
  await delay(5000);
  createText("L left the chat");
  await delay(4000);
  createText("D joined the chat");
  await delay(6000);
  createChat1("D", "What happened?");
  await delay(5000);
  createChat1("D", "We found the security question");
  await delay(5000);
  createChat1("D", "Now we just need the answer");
  await delay(3000);
  createInput1("resposta2");
  let input = document.querySelector("input#resposta2");
  let button = document.querySelector("button#resposta2");
  button.addEventListener("click", () => {
    if (input.value === "L") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte3();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}

async function parte3() {
  await delay(2000);
  createChat1("D", "How did you find out?");
  await delay(5000);
  createChat1("D", " I entered");
  await delay(5000);
  createChat1("D", "The file i need asks for 4 passwords");
  await delay(5000);
  createChat1("D", "fuck");
  await delay(5000);
  createChat1(
    "D",
    "I found some folders"
  );
  await delay(5000);
  createChat1("D", "Maybe they have something");
  await delay(5000);
  createChat1("D", "I'll send you one");
  await delay(4000);
  createLoading("bar1");
  await delay(2000);
  createChat1("D", "Folder 1", "folder1/index.html");
  await delay(7000);
  createChat1("D", "discovered the password?");
  await delay(3000);
  createInput1("resposta3");
  let input = document.querySelector("input#resposta3");
  let button = document.querySelector("button#resposta3");
  button.addEventListener("click", () => {
    if (input.value === "logic") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte4();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}

async function parte4() {
  await delay(2000);
  createChat1("D", "-. .. -.-. .");
  await delay(5000);
  createChat1("D", "I'll send the second folder");
  await delay(3000);
  createLoading("bar2");
  await delay(2000);
  createChat1("D", "Folder 2", "17431552-a176/index.html");
  await delay(7000);
  createChat1("D", "discovered the password?");
  await delay(7000);
  createInput1("resposta4");
  let input = document.querySelector("input#resposta4");
  let button = document.querySelector("button#resposta4");
  button.addEventListener("click", () => {
    if (input.value === "june") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte5();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}




async function parte5() {
  await delay(3000);
  createLoading("bar3");
  await delay(2000);
  createChat1("D", "Folder 3", "4090-a219/index.html");
  await delay(7000);
  createChat1("D", "discovered the password?");
  await delay(7000);
  createInput1("resposta5");
  let input = document.querySelector("input#resposta5");
  let button = document.querySelector("button#resposta5");
  button.addEventListener("click", () => {
    if (input.value === "pontianak") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte6();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}



async function parte6() {
  await delay(3000);
  createChat1("D", "The fourth folder is not opening");
  await delay(4000);
  createChat1("D", "she needs a UUID to open");
  await delay(5000);
  createInput1("resposta6");
  let input = document.querySelector("input#resposta6");
  let button = document.querySelector("button#resposta6");
  button.addEventListener("click", () => {
    let str = input.value;
    let patt1 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    if (str.match(patt1)) {
      localStorage.setItem("myUUID", input.value);
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte7();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}

async function parte7() {
  await delay(3000);
  createLoading("bar4");
  await delay(3000);
  createChat1("D", "Folder 4", "993d86562028/index.html");
  await delay(7000);
  createChat1("D", "discovered the password?");
  await delay(7000);
  createInput1("resposta7");
  let input = document.querySelector("input#resposta7");
  let button = document.querySelector("button#resposta7");
  button.addEventListener("click", () => {
    if (input.value === "massachusetts") {
      input.style.border = "none";
      input.disabled = true;
      button.disabled = true;
      button.style.visibility = "hidden";
      parte8();
    } else {
      input.style.border = "3px solid #FF0000";
    }
  });
}

async function parte8() {
  await delay(3000);
  createChat1("D", "Thank you friend, you are a friend");
  await delay(5000);
  createChat1("D", "I'll have to go out");
  await delay(5000);
  createChat1("D", "maybe tomorrow I'll come back");
  await delay(5000);
  createText("D left the chat");
}

start();
