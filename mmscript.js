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