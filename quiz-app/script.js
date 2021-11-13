const quizData = [
    {
        question: "How old is the Republic?",
        a: "75",
        b: "82",
        c: "90",
        d: "98",
        correct: "d",
    },{
        question: "Who is the first president of the Republic of Turkey?",
        a: "Mustafa Kemal Ataturk",
        b: "Ismet Inönü",
        c: "Kanuni Sultan Süleyman",
        d: "Fatih Sultan Mehmet",
        correct:"a", 
    },{
        question: "Who conquered Istanbul?",
        a: "Yıldırım Bayezid",
        b: "Fatih Sultan Mehmet",
        c: "I. Mehmet",
        d: "Yavuz Sultan Selim",
        correct: "b",
    },{
        question: "Who is the author of Madonna in a Fur Coat?",
        a: "Sait Faik Abasıyanık",
        b: "Sabahattin Zaim",
        c: "Sabahattin Ali",
        d: "Yaşar Kemal",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});