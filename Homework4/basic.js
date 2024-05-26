//이형석 60191956 기초웹프로그래밍 과제4
document.addEventListener("DOMContentLoaded", ()=> {
    const words = [
        { word: "joy", meaning: "A feeling of great pleasure and happiness." },
        { word: "smile", meaning: "Form one's features into a pleased, kind, or amused expression." },
        { word: "laugh", meaning: "Make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement." },
        { word: "happy", meaning: "Feeling or showing pleasure or contentment." },
        { word: "wonderful", meaning: "Inspiring delight, pleasure, or admiration; extremely good." }
    ];

    let currentWordIndex = 0;
    let displayWord = "_".repeat(words[currentWordIndex].word.length);
    let score = 0;
    let guessedLetters = new Set();
    let totalTry =0;
    let hintCount = 3;

    const wordElement = document.getElementById("word");
    const meaningElement = document.getElementById("meaning");
    const scoreElement = document.getElementById("score");
    const guessInput = document.getElementById("guess");
    const messageElement = document.getElementById("message");
    const submitGuessButton = document.getElementById("submitGuess");
    const nextWordButton = document.getElementById("nextWord");
    const totalTryContent = document.getElementById("try");
    const rankButton = document.getElementById("rank");
    const resetScoreButton = document.getElementById("resetScore");
    const hintButton = document.getElementById("hint");

    function updateDisplayWord(letter) {
        let newDisplay = "";
        for (let i = 0; i < words[currentWordIndex].word.length; i++) {
            if (words[currentWordIndex].word[i] === letter) {
                newDisplay += letter;
            } else {
                newDisplay += displayWord[i];
            }
        }
        displayWord = newDisplay;
        wordElement.innerText = displayWord.split("").join("");
    }

    function submitGuess() {
        const guess = guessInput.value.toLowerCase();
        messageElement.classList.remove("error");
        totalTry++
        totalTryContent.innerText = "total try: "+totalTry; 
        if (guess && guess.length === 1) {
            if (guessedLetters.has(guess)) {
                messageElement.innerText = "You already guessed that letter.";
                messageElement.classList.add("error");
            } else {
                if (words[currentWordIndex].word.includes(guess)) {
                    messageElement.innerText = `Good job! The letter "${guess}" is in the word.`;
                    guessedLetters.add(guess);
                    updateDisplayWord(guess);
                } else {
                    messageElement.innerText = `Sorry, the letter "${guess}" is not in the word.`;
                }
                guessInput.value = "";
            }
        } else {
            messageElement.innerText = "Please enter a single letter.";
            messageElement.classList.add("error");
        }

        if (!displayWord.includes("_")) {
            messageElement.innerText = "Congratulations! You guessed the word!";
            messageElement.classList.add("success");
            document.body.style.backgroundColor = "#d4edda";
            guessInput.disabled = true;
            nextWordButton.style.display = "inline";
            submitGuessButton.style.display="none";
        }

        if (currentWordIndex === words.length-1 && !displayWord.includes("_")) {
            score++;
            scoreElement.innerText = score;
            messageElement.innerText = "Game over! You guessed all 5 out of 5 words correctly.";
            nextWordButton.style.display = "none";
            rankButton.style.display = "inline";
            resetScoreButton.style.display = "inline"; 
        }
    }

    function nextWord() {
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            displayWord = "_".repeat(words[currentWordIndex].word.length);
            meaningContent="Meaning: "+words[currentWordIndex].meaning;
        }
        nextWordButton.style.display = "none";
        submitGuessButton.style.display="inline";
        wordElement.innerText = displayWord.split("").join("");
        meaningElement.innerText = meaningContent;
        guessInput.disabled = false;
        guessedLetters = new Set();
        score++;
        scoreElement.innerText = score;
        messageElement.innerText=""
        document.body.style.backgroundColor = "";
        guessInput.focus();
    }

    function rankCheck(){
        let totalLength=0;
        for (let i = 0; i < words.length; i++) {
            totalLength+=words[i].word.length;
        }
        if(totalTry<=totalLength){
            totalTryContent.innerText = "Genius"; 
        }
        else if(totalTry<=totalLength+5){
            totalTryContent.innerText = "Smart"; 
        }
        else if(totalTry<=totalLength+10){
            totalTryContent.innerText = "Common"; 
        }
        else{
            totalTryContent.innerText = "Cheer up"; 
        }
        rankButton.style.display = "none";
        wordElement.innerText = ""
    }
    
    function giveHint() {
        if (hintCount > 0) {
            hintCount--;
            const remainingLetters = words[currentWordIndex].word.split("").filter(letter => !guessedLetters.has(letter));
            if (remainingLetters.length > 0) {
                const hintLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
                guessedLetters.add(hintLetter);
                updateDisplayWord(hintLetter);
                messageElement.innerText = `Hint: The letter "${hintLetter}" is in the word.`;
            }
        } else {
            messageElement.innerText = "No more hints available.";
        }
    }

    function resetScore() {
        location.reload();
    }
    guessInput.addEventListener("keyup", (event)=> {
        if (event.key === "Enter") {
            submitGuess();
        }
    })

    submitGuessButton.addEventListener('click', (event)=>{
        submitGuess();
    })
    nextWordButton.addEventListener('click',(event)=>{
        nextWord();
    })
    rankButton.addEventListener('click',(event)=>{
        rankCheck();
    })
    resetScoreButton.addEventListener("click", (event) => {
        resetScore();
    });
    hintButton.addEventListener("click", (event) => {
        giveHint();
    });
})