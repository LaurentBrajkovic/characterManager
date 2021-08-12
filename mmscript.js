<<<<<<< HEAD


(async() => {

    const template = document.getElementsByTagName("template")[0];
    let target = document.getElementById("target");

    let server = await fetch("https://character-database.becode.xyz/characters");
    let charCard = await server.json(); 

    charCard.forEach(({image, name, shortDescription})=> {

        let character = template.content.cloneNode(true);
        console.log(charCard);
        character.querySelector("img").src = `data:image/png;base64,${image}`;
        character.querySelector("h4").innerHTML = name;
        character.querySelector("p").innerHTML = shortDescription;

        target.appendChild(character);
    });
})();

{/* <section class="material">
<template id="tpl-char">
    <img src="" alt="">
    <li class="character">
        <h4 class="title"></h4>
        <p class="powers"></p>
    </li>
</template>
<ol id="target"></ol>
</section> */}
=======
// (async () => {

//     let listOfChar = await fetch('https://character-database.becode.xyz/characters');
//     console.log(listOfChar);
//     let convertChar = await listOfChar.json();
//     console.log(convertChar);
//     let target = document.getElementById('target');
//     console.log(target);

//     convertChar.forEach(character => {
        
//     });
// })();

// Fetching database
(async()=>{
    let template = document.getElementById('tpl-char');
    let target = document.getElementById('target');
    console.log(target);
    let listOfChar = await fetch('https://character-database.becode.xyz/characters')
    let convertChar = await listOfChar.json()

    
    convertChar.forEach(character => {
        let clone = template.content.cloneNode(true);
        // const documentImage = clone.getElementById('charImg');
        let documentName = clone.getElementById('charName');
        let documentShortDescr = clone.getElementById('charShortDescr');
        

        documentName.innerHTML = character.name;
        documentShortDescr.innerHTML = character.shortDescription;
        // documentImage.setAttribute('src', `convertChar:image/jpeg;base64,${character.image}`);
        target.appendChild(clone);
        target.innerHTML = 'Coucou'
    });
})();

// Add a new character to the collection
document.getElementById('charAdd').addEventListener('click',()=>{
 console.log('I wanna add'); // Open character creator/editor
});
// Search character
document.getElementById('charSearch').addEventListener('input',()=>{
    let inputCharSearch = document.getElementById('charSearch').value;
    console.log(inputCharSearch);
});
>>>>>>> 17ae8ba0f132a11eb0d6846fc08309e2f1338d44
