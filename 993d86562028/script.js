
const UUID = localStorage.getItem('myUUID');
let result = UUID.split("-")
result = `${result[1]}${result[2]}${result[3]}`

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

document.querySelector("button").addEventListener("click", async () => {
  let input = document.querySelector("input");
    if (input.value === `2d1543038713-9bc84ae98395-a1764090a219-${result}`) {
      const link = document.createElement("div");
      link.setAttribute("class", "linkmedia");
      link.textContent = "http://www.mediafire.com/file/5jn51mp386peltc/file.json/file";
      document.querySelector(".content").appendChild(link);
    } else {
      input.style.border = "3px solid #FF0000";
    }
});
