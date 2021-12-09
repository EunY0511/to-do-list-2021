const quotes = [
    "90%는 어제와 똑같은 생각을 한다.",
    "감정은 과거의 기록이다.",
    "감정이 생각을 이끈다면, 똑같은 과거만 만들어낸다.",
    "본인 생각에 의식적이어야 한다.",
    "어떤 내가 되고 싶지?",
    "뭐가 바뀌었지?",
    "갈망하라.",
    "하나에 집중한다면, 모든 것은 따라온다."
]


const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote;