const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let text = document.getElementById("textInput").value;
    let letters = text.toLowerCase();
        letters.replace(/[^a-z'\s]+/g, ""); 
    let words = letters.split(/\s/);
    letterCounter(letters);
    wordCounter(words);
});
function letterCounter(letters){
    const letterCounts = {};
    for (let i = 0; i < letters.length; i++) {
        let currentLetter = letters[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }

        for (let letters in letterCounts) { 
            const span = document.createElement("span"); 
            const letterContent = `"${letters}": ${letterCounts[letters]} , `;
            span.innerText = letterContent; 
            const lettersDiv = document.getElementById("lettersDiv");
            lettersDiv.appendChild(span); 
        }
    
}
function wordCounter(words){
    const wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        let currentword = words[i];
        // faça algo com cada letra 

        if (wordCounts[currentword] === undefined) {
            wordCounts[currentword] = 1; 
        } else { 
            wordCounts[currentword]++; 
        }
    }
    
        for (let words in wordCounts) { 
            const span = document.createElement("span");
            const wordContent = `"${words}": ${wordCounts[words]} , `;
            span.innerText = wordContent ; 
            const wordsDiv = document.getElementById("wordsDiv");
            wordsDiv.appendChild(span); 
        }
      
}
