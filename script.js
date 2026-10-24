let score = Number(localStorage.getItem("score")) || 0;
let answered = false;
let completedEras = JSON.parse(localStorage.getItem("completedEras")) || [];
let scoredEras = JSON.parse(localStorage.getItem("scoredEras")) || [];
function startGame() {
    answered = false;

    const progressMessage =
    completedEras.length === 4
        ? "🏆 ALL ERAS COMPLETED! YOU ARE A TRUE EXPLORER!"
        : `🏆 YOUR PROGRESS: ${completedEras.length} / 4 ERAS COMPLETED`;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">WELCOME, EXPLORER</p>

            <h1>CHOOSE YOUR ERA</h1>

            <p class="tagline">
                Every era holds a secret waiting to be decoded.
            </p>

           <p class="progress">
               ${progressMessage}
            </p>

              ${completedEras.length === 4 ? `
            <button onclick="showJourneyComplete()">
              🏆 VIEW YOUR JOURNEY →
            </button>
            ` : ""}
            <div class="era-container">

                <button class="${completedEras.includes("Indus Valley Civilization") ? "completed" : ""}" onclick="chooseEra('Indus Valley Civilization')">
                    🏺 Indus Valley Civilization
                    <span>
                        5 clues • Ancient cities & seals
                        ${completedEras.includes("Indus Valley Civilization") ? " • ✅ COMPLETED 🏆" : ""}
                    </span>
                </button>

                <button class="${completedEras.includes("Mauryan Empire") ? "completed" : ""}" onclick="chooseEra('Mauryan Empire')">
                    🦁 Mauryan Empire
                    <span>
                        5 clues • Ashoka & Dharma
                        ${completedEras.includes("Mauryan Empire") ? " • ✅ COMPLETED 🏆" : ""}
                    </span>
                </button>

                <button class="${completedEras.includes("Gupta Period") ? "completed" : ""}" onclick="chooseEra('Gupta Period')">
                    📜 Gupta Period
                    <span>
                        5 clues • Science & culture
                        ${completedEras.includes("Gupta Period") ? " • ✅ COMPLETED 🏆" : ""}
                    </span>
                </button>

                <button class="${completedEras.includes("Chola Dynasty") ? "completed" : ""}" onclick="chooseEra('Chola Dynasty')">
                    🚢 Chola Dynasty
                    <span>
                        5 clues • Temples & the sea
                        ${completedEras.includes("Chola Dynasty") ? " • ✅ COMPLETED 🏆" : ""}
                    </span>
                </button>

            </div>

        </div>
    `;
}
function chooseEra(era) {

    if (era === "Indus Valley Civilization") {
        showIndusPuzzle();
    } 
    else if (era === "Mauryan Empire") {
        showMauryanPuzzle();
    } 
    else if (era === "Gupta Period") {
        showGuptaPuzzle();
    } 
    else if (era === "Chola Dynasty") {
        showCholaPuzzle();
    } 
    else {
        alert("More mysteries from this era will be unlocked soon!");
    }
}
function showIndusPuzzle() {
    answered = false;
    document.querySelector(".home").innerHTML = `
        <div class="content">
            <p class="small-title">INDUS VALLEY CIVILIZATION</p>
            <p class="progress">CLUE 1 / 5</p>
            <h1>MYSTERY OF THE INDUS SEAL</h1>
            <p class="tagline">
                Which civilization is famous for seals featuring
                mysterious symbols and animal motifs?
            </p>
            <div class="quiz-options">
                <button onclick="checkAnswer('wrong', this)">
                    🏛️ A) Roman Civilization
                </button>
                <button onclick="checkAnswer('wrong', this)">
                    🐪 B) Egyptian Civilization
                </button>
                 <button onclick="checkAnswer('correct', this)">
                    🏺 C) Indus Valley Civilization
                </button>
                <button onclick="checkAnswer('wrong', this)">
                    🏛️ D) Greek Civilization
                </button>
            </div>
            <p id="result"></p>
            <p id="score">Knowledge Points: ${score}</p>
        </div>
    `;
}
function checkAnswer(answer, button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {

        awardPoints(100, "Indus Valley Civilization");
        answered = true;

        button.classList.add("correct");

        document.querySelectorAll(".quiz-options button").forEach(btn => {
        btn.classList.remove("wrong");
});

result.textContent =
    "🎉 Correct! You discovered the first clue!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextClue;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextClue() {
    showIndusPuzzle2();
}

function showIndusPuzzle2() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">INDUS VALLEY CIVILIZATION</p>

            <p class="progress">CLUE 2 / 5</p>

            <h1>THE MYSTERIOUS SCRIPT</h1>

            <p class="tagline">
                The people of the Indus Valley Civilization used
                mysterious symbols on seals and other objects.
                What is this writing system commonly called?
            </p>

            <div class="quiz-options">

                <button onclick="checkAnswer2('wrong', this)">
                    📜 A) Hieroglyphs
                </button>

                <button onclick="checkAnswer2('correct', this)">
                    🔤 B) Indus Script
                </button>

                <button onclick="checkAnswer2('wrong', this)">
                    🪶 C) Brahmi Script
                </button>

                <button onclick="checkAnswer2('wrong', this)">
                    🏛️ D) Latin Script
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkAnswer2(answer, button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {

        awardPoints(100, "Indus Valley Civilization");
        answered = true;

        button.classList.add("correct");

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
        });

        result.textContent =
            "🎉 Correct! You decoded another ancient clue!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextClue2;

        document.querySelector(".content").appendChild(nextButton);

    } else {

        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextClue2() {
    showIndusPuzzle3();
}

function showIndusPuzzle3() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">INDUS VALLEY CIVILIZATION</p>

            <p class="progress">CLUE 3 / 5</p>

            <h1>THE LOST CITY</h1>

            <p class="tagline">
                Follow the clues and identify the ancient city.
            </p>

            <div class="clue-box">
                <p>🏺 It was a major city of the Indus Valley Civilization.</p>
                <p>💧 It was famous for its advanced drainage system.</p>
                <p>🔤 Its name begins with the letter "M".</p>
            </div>

            <div class="quiz-options">

                <button onclick="checkAnswer3('correct', this)">
                    🏺 A) Mohenjo-daro
                </button>

                <button onclick="checkAnswer3('wrong', this)">
                    🏛️ B) Pataliputra
                </button>

                <button onclick="checkAnswer3('wrong', this)">
                    🏙️ C) Madurai
                </button>

                <button onclick="checkAnswer3('wrong', this)">
                    🏰 D) Taxila
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkAnswer3(answer, button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Indus Valley Civilization");
        answered = true;

        button.classList.add("correct");

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
        });

        result.textContent =
            "🎉 Correct! You discovered the lost city!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextClue3;

        document.querySelector(".content").appendChild(nextButton);

    } else {

        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Follow the clues and try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}

function nextClue3() {
    showIndusPuzzle4();
}

function showIndusPuzzle4() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">INDUS VALLEY CIVILIZATION</p>

            <p class="progress">CLUE 4 / 5</p>
            

            <h1>BUILD THE ANCIENT CITY</h1>

            <p class="tagline">
                An ancient city is taking shape.
                Which feature belongs to its remarkable urban planning?
            </p>

            <div class="quiz-options">

                <button onclick="checkAnswer4('wrong', this)">
                    🏰 A) Huge medieval castles
                </button>

                <button onclick="checkAnswer4('correct', this)">
                    🛣️ B) Planned streets and drainage systems
                </button>

                <button onclick="checkAnswer4('wrong', this)">
                    🗼 C) Roman-style amphitheatres
                </button>

                <button onclick="checkAnswer4('wrong', this)">
                    🏯 D) Gothic cathedrals
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}
function checkAnswer4(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Indus Valley Civilization");
        answered = true;

        // Remove red from any previously selected wrong option
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        // Make the correct option green
        button.style.backgroundColor = "green";
        button.style.color = "white";

        result.textContent =
            "🎉 Correct! You uncovered the secrets of ancient city planning!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextClue4;

        document.querySelector(".content").appendChild(nextButton);

    } else {

        button.style.backgroundColor = "red";
        button.style.color = "white";

        result.textContent =
            "❌ Not quite! Think about the organized layout of the cities.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextClue4() {
    showFinalMystery();
}

function showFinalMystery() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">FINAL MYSTERY</p>

            <p class="progress">FINAL MYSTERY / 5</p>

            <h1>UNLOCK THE ANCIENT SECRET</h1>

            <p class="tagline">
                You have discovered clues about mysterious symbols,
                ancient seals, great cities, and remarkable drainage systems.
                Now identify the artifact connected to your journey.
            </p>

            <div class="quiz-options">

                <button onclick="checkFinalAnswer('wrong', this)">
                    ⚔️ A) Medieval Sword
                </button>

                <button onclick="checkFinalAnswer('wrong', this)">
                    🪙 B) Roman Coin
                </button>

                <button onclick="checkFinalAnswer('wrong', this)">
                    🗿 C) Greek Statue
                </button>

                <button onclick="checkFinalAnswer('correct', this)">
                    🏺 D) Indus Seal
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkFinalAnswer(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(200, "Indus Valley Civilization");
        answered = true;
       if (!scoredEras.includes("Indus Valley Civilization")) {
        scoredEras.push("Indus Valley Civilization");
        localStorage.setItem("scoredEras", JSON.stringify(scoredEras));
}

        // Remove red from any previously selected wrong option
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        // Make the correct option green
        button.style.backgroundColor = "green";
        button.style.color = "white";

        result.textContent =
            "🏆 AMAZING! You unlocked the Ancient Secret!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const finishButton = document.createElement("button");

        finishButton.textContent = "VIEW YOUR DISCOVERY →";

        finishButton.onclick = showFinalResult;

        document.querySelector(".content").appendChild(finishButton);

    } else {

        button.style.backgroundColor = "red";
        button.style.color = "white";

        result.textContent =
            "❌ The mystery remains locked. Study the clues and try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function showFinalResult() {
    if (!completedEras.includes("Indus Valley Civilization")) {
    completedEras.push("Indus Valley Civilization");
    localStorage.setItem("completedEras", JSON.stringify(completedEras));
}
    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MYSTERY SOLVED</p>

            <h1 class="mystery-solved">🏺 ANCIENT SECRET UNLOCKED</h1>

            <p class="tagline">
                Congratulations, Explorer!
                You successfully decoded the mysteries
                of the Indus Valley Civilization.
            </p>

            <div class="clue-box">

                <p>🔐 Clues solved: 5</p>

                <p>🏆 Knowledge Points: ${score}</p>

                <p>🏺 Artifact discovered: Indus Seal</p>

                <p>📜 Ancient Insight:</p>

                <p>
                    The Indus Valley Civilization was known for
                    planned cities, impressive drainage systems,
                    and mysterious seals.
                </p>

            </div>

            <p class="tagline">
                Your journey through the Indus Valley has been completed!
            </p>

            <button onclick="startGame()">
                EXPLORE ANOTHER ERA →
            </button>

        </div>
    `;
}
function showMauryanPuzzle() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MAURYAN EMPIRE</p>

            <p class="progress">CLUE 1 / 5</p>

            <h1>THE EMPEROR OF DHARMA</h1>

            <p class="tagline">
                Which Mauryan ruler is famous for spreading Buddhism
                and promoting the idea of Dharma?
            </p>

            <div class="quiz-options">

                <button onclick="checkMauryanAnswer('correct', this)">
                    🦁 A) Ashoka
                </button>

                <button onclick="checkMauryanAnswer('wrong', this)">
                    👑 B) Chandragupta II
                </button>

                <button onclick="checkMauryanAnswer('wrong', this)">
                    ⚔️ C) Harsha
                </button>

                <button onclick="checkMauryanAnswer('wrong', this)">
                    🏹 D) Samudragupta
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkMauryanAnswer(answer, button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Mauryan Empire");
        answered = true;
        // Remove previous wrong color
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered the Emperor of Dharma!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextMauryanClue;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the Mauryan ruler associated with Dharma.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextMauryanClue() {

    showMauryanPuzzle2();

}

function showMauryanPuzzle2() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MAURYAN EMPIRE</p>

            <p class="progress">CLUE 2 / 5</p>

            <h1>THE LION CAPITAL</h1>

            <p class="tagline">
                Emperor Ashoka is closely associated with a famous
                stone capital discovered at Sarnath.
                What animals appear on the famous capital?
            </p>

            <div class="quiz-options">

                <button onclick="checkMauryanAnswer2('correct', this)">
                    🦁 A) Lions
                </button>

                <button onclick="checkMauryanAnswer2('wrong', this)">
                    🐘 B) Elephants only
                </button>

                <button onclick="checkMauryanAnswer2('wrong', this)">
                    🐎 C) Horses only
                </button>

                <button onclick="checkMauryanAnswer2('wrong', this)">
                    🐅 D) Tigers
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkMauryanAnswer2(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Mauryan Empire");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You uncovered the symbol of Ashoka!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextMauryanClue2;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the famous Lion Capital.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextMauryanClue2() {

    showMauryanPuzzle3();

}

function showMauryanPuzzle3() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MAURYAN EMPIRE</p>

            <p class="progress">CLUE 3 / 5</p>

            <h1>THE GREAT EMPIRE</h1>

            <p class="tagline">
                The Mauryan Empire became one of the largest empires
                in ancient India. Which ruler founded the Mauryan Empire?
            </p>

            <div class="quiz-options">

                <button onclick="checkMauryanAnswer3('correct',this)">
                    👑 A) Chandragupta Maurya
                </button>

                <button onclick="checkMauryanAnswer3('wrong',this)">
                    🦁 B) Ashoka
                </button>

                <button onclick="checkMauryanAnswer3('wrong',this)">
                    ⚔️ C) Bindusara
                </button>

                <button onclick="checkMauryanAnswer3('wrong',this)">
                    📜 D) Kanishka
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkMauryanAnswer3(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Mauryan Empire");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered the founder of the Mauryan Empire!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextMauryanClue3;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the ruler who established the Mauryan Empire.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}

function nextMauryanClue3() {

    showMauryanPuzzle4();

}

function showMauryanPuzzle4() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MAURYAN EMPIRE</p>

            <p class="progress">CLUE 4 / 5</p>

            <h1>THE DHARMA WHEEL</h1>

            <p class="tagline">
                You discover a wheel carved into an ancient stone pillar.
                What is this famous symbol called?
            </p>

            <div class="quiz-options">

                <button onclick="checkMauryanAnswer4('correct',this)">
                    ☸️ A) Dharma Chakra
                </button>

                <button onclick="checkMauryanAnswer4('wrong',this)">
                    🪷 B) Lotus Mudra
                </button>

                <button onclick="checkMauryanAnswer4('wrong',this)">
                    🦁 C) Lion Emblem
                </button>

                <button onclick="checkMauryanAnswer4('wrong',this)">
                    🔱 D) Trishula
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkMauryanAnswer4(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Mauryan Empire");
        answered = true;
        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You decoded the Dharma Chakra!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextMauryanClue4;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the wheel associated with Dharma.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}

function nextMauryanClue4() {

    showMauryanFinalMystery();

}

function showMauryanFinalMystery() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">FINAL MYSTERY</p>

            <p class="progress">FINAL MYSTERY / 5</p>

            <h1>THE ASHOKAN SECRET</h1>

            <p class="tagline">
                You have uncovered four clues from the Mauryan Empire.
                Now connect them to unlock the final discovery.
            </p>

            <div class="clue-box">

                <p>👑 Clue 1: The founder was Chandragupta Maurya.</p>

                <p>🦁 Clue 2: A famous ruler was Ashoka.</p>

                <p>☸️ Clue 3: Dharma was represented by a wheel.</p>

                <p>🪨 Clue 4: A famous lion capital was discovered at Sarnath.</p>

            </div>

            <p class="tagline">
                Which famous symbol from this journey appears
                on the national emblem of India?
            </p>

            <div class="quiz-options">

                <button onclick="checkMauryanFinal('correct',this)">
                    🦁 A) Lion Capital of Ashoka
                </button>

                <button onclick="checkMauryanFinal('wrong',this)">
                    🐘 B) Elephant of Pataliputra
                </button>

                <button onclick="checkMauryanFinal('wrong',this)">
                    🏰 C) Mauryan Palace
                </button>

                <button onclick="checkMauryanFinal('wrong',this)">
                    ⚔️ D) Mauryan Sword
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkMauryanFinal(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(200, "Mauryan Empire");
        answered = true;
        if (!scoredEras.includes("Mauryan Empire")) {
            scoredEras.push("Mauryan Empire");
            localStorage.setItem("scoredEras", JSON.stringify(scoredEras));
}

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🏆 AMAZING! You unlocked the Ashokan Secret!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const finishButton = document.createElement("button");

        finishButton.textContent = "VIEW YOUR DISCOVERY →";

        finishButton.onclick = showMauryanResult;

        document.querySelector(".content").appendChild(finishButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ The secret remains locked. Reconnect the four clues and try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function showMauryanResult() {
    if (!completedEras.includes("Mauryan Empire")) {
    completedEras.push("Mauryan Empire");
    localStorage.setItem("completedEras", JSON.stringify(completedEras));
}
    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MYSTERY SOLVED</p>

            <h1 class="mystery-solved">🦁 ASHOKAN SECRET UNLOCKED</h1>

            <p class="tagline">
                Congratulations, Explorer!
                You successfully decoded the mysteries
                of the Mauryan Empire.
            </p>

            <div class="clue-box">

                <p>🔐 Clues solved: 5</p>

                <p>🏆 Knowledge Points: ${score}</p>

                <p>🦁 Discovery: Lion Capital of Ashoka</p>

                <p>📜 Ancient Insight:</p>

                <p>
                    Emperor Ashoka is remembered for spreading
                    the principles of Dharma and for the famous
                    Lion Capital at Sarnath.
                </p>

            </div>

            <p class="tagline">
                Your journey through the Mauryan Empire has been completed!
            </p>

            <button onclick="startGame()">
                EXPLORE ANOTHER ERA →
            </button>

        </div>
    `;
}
function showGuptaPuzzle() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">GUPTA PERIOD</p>

            <p class="progress">CLUE 1 / 5</p>

            <h1>THE MATHEMATICAL MYSTERY</h1>

            <p class="tagline">
                A brilliant scholar from ancient India made important
                contributions to mathematics and astronomy.
                Who was he?
            </p>

            <div class="quiz-options">

                <button onclick="checkGuptaAnswer('correct',this)">
                    🔢 A) Aryabhata
                </button>

                <button onclick="checkGuptaAnswer('wrong',this)">
                    🦁 B) Ashoka
                </button>

                <button onclick="checkGuptaAnswer('wrong',this)">
                    👑 C) Chandragupta Maurya
                </button>

                <button onclick="checkGuptaAnswer('wrong',this)">
                    ⚔️ D) Shivaji
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkGuptaAnswer(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Gupta Period");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered a brilliant mind of ancient India!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextGuptaClue;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the scholar associated with mathematics and astronomy.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextGuptaClue() {

    showGuptaPuzzle2();

}

function showGuptaPuzzle2() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">GUPTA PERIOD</p>

            <p class="progress">CLUE 2 / 5</p>

            <h1>THE STARS ABOVE</h1>

            <p class="tagline">
                Aryabhata made important contributions to the study
                of the skies. Which field was central to his work?
            </p>

            <div class="quiz-options">

                <button onclick="checkGuptaAnswer2('correct',this)">
                    🌌 A) Astronomy
                </button>

                <button onclick="checkGuptaAnswer2('wrong',this)">
                    ⚔️ B) Warfare
                </button>

                <button onclick="checkGuptaAnswer2('wrong',this)">
                    🚢 C) Shipbuilding
                </button>

                <button onclick="checkGuptaAnswer2('wrong',this)">
                    🎨 D) Sculpture
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}
function checkGuptaAnswer2(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Gupta Period");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You uncovered the astronomical mystery!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextGuptaClue2;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Look toward the stars and think about Aryabhata's work.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextGuptaClue2() {

    showGuptaPuzzle3();

}

function showGuptaPuzzle3() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">GUPTA PERIOD</p>

            <p class="progress">CLUE 3 / 5</p>

            <h1>THE GOLDEN AGE OF ART</h1>

            <p class="tagline">
                Ancient artists created remarkable paintings that
                have survived for centuries. Which famous caves
                are known for their ancient paintings?
            </p>

            <div class="quiz-options">

                <button onclick="checkGuptaAnswer3('correct',this)">
                    🎨 A) Ajanta Caves
                </button>

                <button onclick="checkGuptaAnswer3('wrong',this)">
                    🏰 B) Red Fort
                </button>

                <button onclick="checkGuptaAnswer3('wrong',this)">
                    🛕 C) Konark Temple
                </button>

                <button onclick="checkGuptaAnswer3('wrong',this)">
                    🏛️ D) India Gate
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}
function checkGuptaAnswer3(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Gupta Period");
        answered = true;
        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You uncovered a masterpiece of ancient Indian art!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextGuptaClue3;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the famous caves known for their paintings.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextGuptaClue3() {

    showGuptaPuzzle4();

}

function showGuptaPuzzle4() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">GUPTA PERIOD</p>

            <p class="progress">CLUE 4 / 5</p>

            <h1>THE IRON MYSTERY</h1>

            <p class="tagline">
                An ancient iron pillar in Delhi is famous for its
                remarkable resistance to corrosion.
                Which period is it commonly associated with?
            </p>

            <div class="quiz-options">

                <button onclick="checkGuptaAnswer4('correct',this)">
                    ⚒️ A) Gupta Period
                </button>

                <button onclick="checkGuptaAnswer4('wrong',this)">
                    🦁 B) Mauryan Period
                </button>

                <button onclick="checkGuptaAnswer4('wrong',this)">
                    🏺 C) Indus Valley Period
                </button>

                <button onclick="checkGuptaAnswer4('wrong',this)">
                    🚢 D) Chola Period
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkGuptaAnswer4(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Gupta Period");
        answered = true;
        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered an ancient achievement in metallurgy!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextGuptaClue4;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the period known for remarkable achievements in metallurgy.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextGuptaClue4() {

    showGuptaFinalMystery();

}

function showGuptaFinalMystery() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">FINAL MYSTERY</p>

            <p class="progress">FINAL MYSTERY / 5</p>

            <h1>THE GOLDEN AGE SECRET</h1>

            <p class="tagline">
                You have uncovered four clues from the Gupta period.
                Connect them to reveal why this era is remembered
                as a remarkable period of ancient Indian history.
            </p>

            <div class="clue-box">

                <p>🔢 Clue 1: Aryabhata and mathematics</p>

                <p>🌌 Clue 2: Astronomy and the study of the skies</p>

                <p>🎨 Clue 3: Ajanta and ancient art</p>

                <p>⚒️ Clue 4: Remarkable achievements in metallurgy</p>

            </div>

            <p class="tagline">
                Why is the Gupta period often remembered
                as a major period of achievement?
            </p>

            <div class="quiz-options">

                <button onclick="checkGuptaFinal('correct',this)">
                    ⭐ A) Achievements in science, mathematics, art and culture
                </button>

                <button onclick="checkGuptaFinal('wrong',this)">
                    ⚔️ B) It was mainly known for warfare
                </button>

                <button onclick="checkGuptaFinal('wrong',this)">
                    🚢 C) It was mainly a maritime trading empire
                </button>

                <button onclick="checkGuptaFinal('wrong',this)">
                    🏰 D) It was famous for medieval forts
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}
function checkGuptaFinal(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(200, "Gupta Period");
        answered = true;
        if (!scoredEras.includes("Gupta Period")) {
            scoredEras.push("Gupta Period");
            localStorage.setItem("scoredEras", JSON.stringify(scoredEras));
}
        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🏆 AMAZING! You unlocked the Golden Age Secret!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const finishButton = document.createElement("button");

        finishButton.textContent = "VIEW YOUR DISCOVERY →";

        finishButton.onclick = showGuptaResult;

        document.querySelector(".content").appendChild(finishButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ The secret remains locked. Connect the four clues and try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function showGuptaResult() {
    if (!completedEras.includes("Gupta Period")) {
    completedEras.push("Gupta Period");
    localStorage.setItem("completedEras", JSON.stringify(completedEras));
}
    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MYSTERY SOLVED</p>

            <h1 class="mystery-solved">⭐ GOLDEN AGE UNLOCKED</h1>

            <p class="tagline">
                Congratulations, Explorer!
                You successfully decoded the mysteries
                of the Gupta Period.
            </p>

            <div class="clue-box">

                <p>🔐 Clues solved: 5</p>

                <p>🏆 Knowledge Points: ${score}</p>

                <p>⭐ Discovery: The Golden Age of Achievement</p>

                <p>📜 Ancient Insight:</p>

                <p>
                    The Gupta period is remembered for important
                    achievements in mathematics, astronomy, art,
                    literature, and metallurgy.
                </p>

            </div>

            <p class="tagline">
                Your journey through the Gupta Period has been completed!
            </p>

            <button onclick="startGame()">
                EXPLORE ANOTHER ERA →
            </button>

        </div>
    `;
}
function showCholaPuzzle() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">CHOLA DYNASTY</p>

            <p class="progress">CLUE 1 / 5</p>

            <h1>THE MARITIME MYSTERY</h1>

            <p class="tagline">
                The Cholas developed strong connections across the seas.
                Which activity was important to their overseas influence?
            </p>

            <div class="quiz-options">

                <button onclick="checkCholaAnswer('correct',this)">
                    🚢 A) Maritime trade and naval expeditions
                </button>

                <button onclick="checkCholaAnswer('wrong',this)">
                    🏹 B) Desert warfare
                </button>

                <button onclick="checkCholaAnswer('wrong',this)">
                    🐪 C) Silk Road camel caravans
                </button>

                <button onclick="checkCholaAnswer('wrong',this)">
                    🏰 D) European castle building
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkCholaAnswer(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Chola Dynasty");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered the Cholas' maritime secret!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextCholaClue;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the Cholas' connection with the sea.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextCholaClue() {

    showCholaPuzzle2();

}

function showCholaPuzzle2() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">CHOLA DYNASTY</p>

            <p class="progress">CLUE 2 / 5</p>

            <h1>THE GREAT TEMPLE</h1>

            <p class="tagline">
                A magnificent temple stands as a symbol of Chola
                architecture. Which famous temple was built by
                Rajaraja Chola I?
            </p>

            <div class="quiz-options">

                <button onclick="checkCholaAnswer2('correct',this)">
                    🛕 A) Brihadeeswarar Temple
                </button>

                <button onclick="checkCholaAnswer2('wrong',this)">
                    🏛️ B) Sanchi Stupa
                </button>

                <button onclick="checkCholaAnswer2('wrong',this)">
                    🕌 C) Qutb Minar
                </button>

                <button onclick="checkCholaAnswer2('wrong',this)">
                    🏰 D) Red Fort
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkCholaAnswer2(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Chola Dynasty");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered a masterpiece of Chola architecture!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextCholaClue2;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the magnificent temple at Thanjavur.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextCholaClue2() {

    showCholaPuzzle3();

}

function showCholaPuzzle3() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">CHOLA DYNASTY</p>

            <p class="progress">CLUE 3 / 5</p>

            <h1>THE NEW CAPITAL</h1>

            <p class="tagline">
                A powerful Chola ruler established a new capital
                after his victorious northern expedition.
                What was this city called?
            </p>

            <div class="quiz-options">

                <button onclick="checkCholaAnswer3('correct',this)">
                    🏛️ A) Gangaikonda Cholapuram
                </button>

                <button onclick="checkCholaAnswer3('wrong',this)">
                    🏺 B) Madurai
                </button>

                <button onclick="checkCholaAnswer3('wrong',this)"> 
                    🏰 C) Pataliputra
                </button>

                <button onclick="checkCholaAnswer3('wrong',this)">
                    🌊 D) Kaveripattinam
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkCholaAnswer3(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Chola Dynasty");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You discovered the Chola's new capital!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextCholaClue3;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the city established by Rajendra Chola I.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextCholaClue3() {

    showCholaPuzzle4();

}

function showCholaPuzzle4() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">CHOLA DYNASTY</p>

            <p class="progress">CLUE 4 / 5</p>

            <h1>THE BRONZE MASTERPIECE</h1>

            <p class="tagline">
                Chola artists became famous for creating beautiful
                sculptures using a sophisticated casting technique.
                What material were these famous sculptures primarily made from?
            </p>

            <div class="quiz-options">

                <button onclick="checkCholaAnswer4('correct',this)">
                    🥉 A) Bronze
                </button>

                <button onclick="checkCholaAnswer4('wrong',this)">
                    🪨 B) Granite
                </button>

                <button onclick="checkCholaAnswer4('wrong',this)">
                    🧱 C) Terracotta
                </button>

                <button onclick="checkCholaAnswer4('wrong',this)">
                    🪵 D) Wood
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkCholaAnswer4(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(100, "Chola Dynasty");
        answered = true;

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🎉 Correct! You uncovered the Cholas' bronze artistry!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const nextButton = document.createElement("button");

        nextButton.textContent = "NEXT CLUE →";

        nextButton.onclick = nextCholaClue4;

        document.querySelector(".content").appendChild(nextButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ Not quite! Think about the famous Chola bronze sculptures.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}
function nextCholaClue4() {

    showCholaFinalMystery();

}

function showCholaFinalMystery() {

    answered = false;

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">FINAL MYSTERY</p>

            <p class="progress">FINAL MYSTERY / 5</p>

            <h1>THE CHOLA LEGACY</h1>

            <p class="tagline">
                You have uncovered four clues from the Chola Dynasty.
                Connect them to reveal the legacy of this powerful
                South Indian dynasty.
            </p>

            <div class="clue-box">

                <p>🚢 Clue 1: Maritime trade and naval expeditions</p>

                <p>🛕 Clue 2: Brihadeeswarar Temple</p>

                <p>🏛️ Clue 3: Gangaikonda Cholapuram</p>

                <p>🥉 Clue 4: Chola bronze artistry</p>

            </div>

            <p class="tagline">
                What best explains the importance of the Chola Dynasty
                in South Indian history?
            </p>

            <div class="quiz-options">

                <button onclick="checkCholaFinal('correct',this)">
                    ⭐ A) Administration, temple architecture,
                    art, trade and maritime power
                </button>

                <button onclick="checkCholaFinal('wrong',this)">
                    ⚔️ B) Mainly desert warfare
                </button>

                <button onclick="checkCholaFinal('wrong',this)">
                    🏰 C) Mainly medieval European castles
                </button>

                <button onclick="checkCholaFinal('wrong',this)"> 
                    🐪 D) Mainly landlocked caravan routes
                </button>

            </div>

            <p id="result"></p>

            <p id="score">
                Knowledge Points: ${score}
            </p>

        </div>
    `;
}

function checkCholaFinal(answer,button) {

    const result = document.getElementById("result");

    if (answered) {
        return;
    }

    if (answer === "correct") {
        awardPoints(200, "Chola Dynasty");
        answered = true;
        if (!scoredEras.includes("Chola Dynasty")) {
            scoredEras.push("Chola Dynasty");
            localStorage.setItem("scoredEras", JSON.stringify(scoredEras));
}

        // Remove previous wrong colors
        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.classList.remove("wrong");
            btn.classList.remove("correct");
        });

        // Make the correct answer green
        button.classList.add("correct");

        result.textContent =
            "🏆 AMAZING! You unlocked the Chola Legacy!";

        document.querySelectorAll(".quiz-options button").forEach(btn => {
            btn.disabled = true;
        });

        const finishButton = document.createElement("button");

        finishButton.textContent = "VIEW YOUR DISCOVERY →";

        finishButton.onclick = showCholaResult;

        document.querySelector(".content").appendChild(finishButton);

    } 
    else {

        // Make the selected wrong answer red
        button.classList.add("wrong");

        result.textContent =
            "❌ The legacy remains locked. Connect the four clues and try again.";
    }

    document.getElementById("score").textContent =
        "Knowledge Points: " + score;
}

function showCholaResult() {
    if (!completedEras.includes("Chola Dynasty")) {
    completedEras.push("Chola Dynasty");
    localStorage.setItem("completedEras", JSON.stringify(completedEras));
}
    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">MYSTERY SOLVED</p>

            <h1 class="mystery-solved">🚢 CHOLA LEGACY UNLOCKED</h1>

            <p class="tagline">
                Congratulations, Explorer!
                You successfully decoded the mysteries
                of the Chola Dynasty.
            </p>

            <div class="clue-box">

                <p>🔐 Clues solved: 5</p>

                <p>🏆 Knowledge Points: ${score}</p>

                <p>🚢 Discovery: The Chola Legacy</p>

                <p>📜 Ancient Insight:</p>

                <p>
                    The Cholas were known for powerful naval
                    expeditions, magnificent temples, and
                    remarkable bronze sculptures.
                </p>

            </div>

            <p class="tagline">
                Your journey through the Chola Dynasty has been completed!
            </p>

            <button onclick="startGame()">
                RETURN TO ERA MAP →
            </button>

        </div>
    `;
}
function showJourneyComplete() {

    document.querySelector(".home").innerHTML = `
        <div class="content">

            <p class="small-title">JOURNEY COMPLETED</p>

            <h1>🏆 ANCIENT INDIA MASTER</h1>

            <p class="tagline">
                Congratulations, Explorer!
                You have successfully uncovered the mysteries
                of all four ancient eras.
            </p>

            <div class="clue-box">

                <p>🏺 Indus Valley Civilization — ✅ COMPLETED</p>

                <p>🦁 Mauryan Empire — ✅ COMPLETED</p>

                <p>⭐ Gupta Period — ✅ COMPLETED</p>

                <p>🚢 Chola Dynasty — ✅ COMPLETED</p>

            </div>

            <p class="tagline">
                You have explored cities, empires, science,
                art, architecture and maritime achievements
                across ancient India.
            </p>

            <div class="clue-box">

                <p>🏆 FINAL SCORE</p>

                <p class="final-score">${score} / 2400 Knowledge Points</p>

                <p>🌟 You are a true Explorer of Ancient India!</p>

            </div>

            <button onclick="startGame()">
                🔄 EXPLORE AGAIN
            </button>

        </div>
    `;
}

function awardPoints(points, era) {

    if (!scoredEras.includes(era)) {
        score += points;
        localStorage.setItem("score", score);
    }
}