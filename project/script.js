function startQuiz() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
}
let questions = [
    {
        text: "You get a promotion at work and one of your coworkers suddenly starts being really nice and asks you to hang out. Just when you think you two are friends, they ask you to let them off the hook if they show up late to your birthday party.",
        options: ["Choice Restriction", "Love Flooding", "Gaslighting", "Semantic Manipulation"],
        correct: 1// Index of the correct option
    },
    {
        text: "Your cousin stops talking to you when you refuse to loan them $50. They get cold, distant, and stop replying to your texts.",
        options: ["Gaslighting", "Confidence Breaching", "Love Flooding ", "Love Withholding"],
        correct: 3 // Index of the correct option
    },
    {
        text: "You start dating someone you met on Tinder but you see the app on their phone despite the fact that they said they’d delete it.",
        options: ["Gaslighting", "Lying", "Choice restriction ", "Semantic Manipulation"],
        correct: 1 // Index of the correct option
    },
    {
        text: "Money goes missing from your wallet. Your roommate claims not only did they not take it, but that you mentioned having zero cash to begin with yesterday. This happens again and again until eventually, you think your memory is just bad when it comes to money.",
        options: ["Semantic Manipulation", "Gaslighting", "Reverse psychology ", "Confidence Breaching"],
        correct: 1 // Index of the correct option
    },
    {
        text: "Your partner wants to go out for pizza, but you want to stay in and watch a movie. They tell you, “We can either go out for pizza together, or I can leave and you can watch a movie by yourself",
        options: ["Choice restriction", "Lying ", "Gaslighting ", "Semantic Manipulation"],
        correct: 0 // Index of the correct option
    },
    {
        text: "You want a friend of yours to come to your birthday party next week. They say, “Well, I was supposed to go see my grandmother and she’s real sick, but…no, I guess I can blow her off.” You feel bad so you go, “Oh, no way. Go see your grandma, it’s totally okay",
        options: ["Confidence breaching", "semantic Manipulation ", "Reverse psychology  ", "Love withholding"],
        correct: 2 // Index of the correct option
    },
    {
        text: "You mentioned one time wanting to lose weight. Your friend keeps making jokes about you being overweight. When you ask them to stop, they say, “You wanted to lose weight! I’m just encouraging you to change",
        options: ["Confidence breaching", "semantic Manipulation ", "Reverse psychology  ", "Love withholding"],
        correct: 1// Index of the correct option
    },
    {
        text: "You’ve got a crush on someone and your friend tells everybody about it just to get a laugh at lunch.",
        options: ["Choice restriction", "Lying ", "Reverse Psychology ", "Confidence breaching"],
        correct: 3 // Index of the correct option
    },
    {
        text: "Our manager wants us to impress the new client with our creative solutions and accurate data in tomorrow's presentation. We need to make sure our slides are captivating and we'll review everything an hour beforehand",
        options: ["Semantic Manipulation", "Gaslighting", "Reverse psychology ", "Confidence Breaching"],
        correct: 0// Index of the correct option
    },
    {
        text: "Hey, I bet you can't finish all your broccoli. It's really for grown-ups, and it's okay if you don't eat it. I understand if it's too much for you",
        options: ["Choice restriction", "Lying", "Reverse psychology ", "Confidence Breaching"],
        correct: 2// Index of the correct option
    },

    // Add more questions as needed
];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    updateQuestion(); // Initialize the first question
}

function showHighScores() {
    alert("High scores functionality not implemented yet.");
}

function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = question.text;
        let options = document.getElementsByClassName('quiz-option');
        for (let i = 0; i < options.length; i++) {
            options[i].innerText = `${String.fromCharCode(65 + i)}. ${question.options[i]}`;
            options[i].classList.remove('correct', 'incorrect'); // Reset classes
            options[i].disabled = false; // Re-enable buttons
        }
        document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    } else {
        // Redirect to awareness page after last question
        window.location.href = "awareness.html?score=" + score + "&total=" + questions.length;
    }
}

function nextQuestion(selectedOptionIndex) {
    let correctOptionIndex = questions[currentQuestionIndex].correct;
    let options = document.getElementsByClassName('quiz-option');
    
    if (selectedOptionIndex === correctOptionIndex) {
        score++;
        options[selectedOptionIndex].classList.add('correct');
    } else {
        options[selectedOptionIndex].classList.add('incorrect');
        options[correctOptionIndex].classList.add('correct'); // Highlight the correct option
    }

    document.getElementById('score').innerText = score;
    
    // Disable all options after a selection
    for (let option of options) {
        option.disabled = true;
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        updateQuestion();
    }, 1000); // 2-second delay
}

// Initialize the first question
updateQuestion();