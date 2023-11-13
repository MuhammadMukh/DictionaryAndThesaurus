function searchWord() {
    const word = document.getElementById("wordInput").value;
  
    // You can replace this API with a more reliable one if needed
    const dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
    fetch(dictionaryAPI)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const entry = data[0];
          displayWordDetails(entry);
        } else {
          alert('No definitions found for the entered word.');
        }
      })
      .catch(error => {
        alert('Error fetching dictionary data: ' + error.message);
        console.error('Error fetching dictionary data:', error);
      });
  }
  
  function displayWordDetails(entry) {
    document.getElementById("word").textContent = entry.word;
  
    const wordDefinitions = entry.meanings.map(meaning => meaning.definitions[0].definition);
    document.getElementById("definitions").textContent = `Definitions: ${wordDefinitions.join(', ')}`;
  
    const wordSynonyms = entry.meanings.map(meaning => meaning.definitions[0].synonyms.join(', '));
    document.getElementById("synonyms").textContent = `Synonyms: ${wordSynonyms.join(', ')}`;
  
    document.getElementById("wordDetails").style.display = "block";
  }
  