document.addEventListener("DOMContentLoaded", function() {
    const randomApiUrl = "https://random-word-api.herokuapp.com/word";
    const imageSection = document.querySelector(".image-section");
    const meaningSection = document.querySelector(".meaning-section");

    async function fetchRandomWord() {
        try {
            const response = await fetch(randomApiUrl);
            const words = await response.json();
            // Assuming the API returns an array of words, use the first word
            const randomWord = words[0];
            return randomWord;
        } catch (error) {
            console.error("Error fetching random word:", error);
            throw new Error("Failed to fetch word");
        }
    }

    async function fetchWordMeaning(word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            
            // Check if the response contains any data
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("No meaning found for the word");
            }
    
            // Extract the first meaning for the word
            const meanings = data[0].meanings;
            console.log(data);
            console.log(meanings);
    
            // Check if meanings exist and has at least one definition
            if (!meanings || meanings.length === 0 || !meanings[0].definitions || meanings[0].definitions.length === 0) {
                throw new Error("No meaning found for the word");
            }
    
            // Extract definition for the first meaning
            const definition = meanings[0].definitions[0].definition || "Meaning not found";
            
            return definition;
        } catch (error) {
            console.error("Error fetching word meaning:", error);
            throw new Error("Failed to fetch word meaning");
        }
    }
    
    
    
    

    async function gentext() {
        try {
            // Fetch a random word
            const randomWord = await fetchRandomWord();
            // Fetch the meaning of the word
            const wordMeaning = await fetchWordMeaning(randomWord);
            // Display the word and its meaning
            imageSection.innerHTML = `<strong>${randomWord}</strong>`;
            meaningSection.innerHTML = `<strong>Meaning:</strong> ${wordMeaning}`;
        } catch (error) {
            imageSection.innerHTML = error.message;
            meaningSection.innerHTML = "";
        }
    }

    // Add event listener to the button
    document.getElementById("random-word-btn").addEventListener("click", gentext);
});
