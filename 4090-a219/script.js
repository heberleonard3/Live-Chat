const delay = (ms) => new Promise((res) => setTimeout(res, ms));

document.querySelector("button").addEventListener("click", async () => {
  let str = document.querySelector("input").value;
  let patt1 = /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/;

  if (str.match(patt1)) {
    document.body.style.backgroundColor = str;
    if (document.querySelector("input").value === "#A4BEBD") {
      localStorage.setItem('password', 'pontianak');
      await delay(1000);
      document.querySelector("h1").textContent =
        "Password is in local storage";
    }
  }
});
