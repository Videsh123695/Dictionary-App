let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (searchValue) => {
    
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
        let data = await res.json();


        document.querySelector(".text").innerHTML="";
        let div=document.createElement("div");
        div.classList.add("detail");
        div.innerHTML=`<h2>Word: <span> ${data[0].word}</span></h2>

            <p>${ data[0].meanings[0].partOfSpeech}</p>
            
            <p>Meaning: <span>${ data[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example: <span>${ data[0].meanings[0].definitions[0].example==undefined ? "Not found" : data[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms: <span>${ data[0].meanings[0].synonyms}</span></p>
            
            <a href=${data[0].sourceUrls[0]} target="_blank" >Read more</a>`;
        document.querySelector(".text").appendChild(div);

        console.log("getting data");
        console.log("Word:", data[0].word);
        console.log("Definition:", data[0].meanings[0].definitions[0].definition);
        console.log("Synonyms:", data[0].meanings[0].synonyms);
    
    
};

searchBtn.addEventListener("click", function() {
    let searchValue = searchInput.value.trim();// to avoid space 
    if (searchValue === "") {
        alert("Please enter a word first!");
    } else {
        getData(searchValue);
    }
});
