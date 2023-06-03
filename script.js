const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const random = document.getElementById("random");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	const r1 = Math.floor(Math.random() * 255);
	const g1 = Math.floor(Math.random() * 255);
	const b1 = Math.floor(Math.random() * 255);

	const r2 = Math.floor(Math.random() * 255);
	const g2 = Math.floor(Math.random() * 255);
	const b2 = Math.floor(Math.random() * 255);

	body.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2}, ${b2}) )`

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);