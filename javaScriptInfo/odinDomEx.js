// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redParagraph = document.createElement("p");
redParagraph.classList.add("redParagraph");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a  blue h3!";
blueH3.setAttribute("style", "color: blue;");

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "background-color: pink; border-color: black;");

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";

const newP = document.createElement("p");
newP.textContent = "ME TOO!";

const btn = document.querySelector("#btn");

//the good one
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
})


container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueH3);

newDiv.appendChild(newH1);
newDiv.appendChild(newP);
container.appendChild(newDiv);