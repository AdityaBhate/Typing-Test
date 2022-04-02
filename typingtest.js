const setOfWords = [
	"He hung up and texted her quickly, typing with his thumb.",
	"He whipped out his phone and trotted down the stairs, typing a response to one of the many texts he'd received.",
	"If you are a student or are taking a typing class, ask your teacher if the school has a version of Mavis Beacon that you can practice with.",
	"Typing ps ax on Saturday usually gave me a half dozen processes to kill.",
	"Mags is now sitting on my knee while im typing. the little attention whore.",
	"The red cell serology laboratory at IBGRL has a unique collection of over 4000 rare typing sera and 2000 rare red cells.",
	"You can also use the search box provided, by simply typing in the product you are looking for.",
];

const textToType = document.getElementById("textToType");
const userText = document.getElementById("userText");
const btn = document.getElementById("btn");
const textarea = document.querySelector("textarea");

let startTime;
let endTime;

function startTest() {
	textToType.style.color = "#3483eb";
	let random = Math.floor(Math.random() * setOfWords.length);
	textToType.innerHTML = setOfWords[random];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Stop";
	textarea.innerText = " ";
}

function stopTest() {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = (endTime - startTime) / 1000;
	console.log(totalTime);
	let totalstr = userText.value;
	let wordCount = wordCounter(totalstr);

	let typingSpeed = Math.round((wordCount / totalTime) * 60);
	let display = "Speed : " + typingSpeed + " wpm";
	display += compareWord(textToType.innerText, totalstr);
	textToType.style.color = "#E2B714";
	textToType.innerText = display;
}

function compareWord(str1, str2) {
	let Word1 = str1.split(" ");
	let Word2 = str2.split(" ");
	let cnt = 0;

	Word1.forEach((item, index) => {
		if (item == Word2[index]) {
			cnt++;
		}
	});

	let error = Word1.length - cnt;
	let accuray = Math.round((cnt / Word1.length) * 100);
	return "\nAcc : " + accuray + "% \nerrors : " + error + " words";
}

function wordCounter(string) {
	let response = string.split(" ").length;
	console.log(response);
	return response;
}

btn.addEventListener("click", function () {
	if (this.innerText == "Start") {
		userText.disabled = false;
		startTest();
	} else if (this.innerText == "Stop") {
		userText.disabled = true;
		btn.innerText = "Start";
		stopTest();
	}
});
