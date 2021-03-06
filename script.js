const mainContainer = document.querySelector(".main-container");
const mainContainerBack = document.querySelector(".main-container-back");
const submitBtn = document.querySelector(".btn");
const selectedNumber = document.querySelectorAll(".number");
const choice = document.querySelector(".choice")
submitBtn.addEventListener("click", function () {
	mainContainer.style.display = "none";
	mainContainerBack.style.display = "block";
})
const numberChosen = function(e) {
	let selected = e.target.innerHTML;
	
	choice.textContent = selected;
	e.target.classList.toggle("focus");
}

selectedNumber.forEach(number => number.addEventListener("click", numberChosen));