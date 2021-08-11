// document.getElementById('charName').innerHTML = ''

// document.getElementById('charView').addEventListener('click', ()=>{});

(async () => {

    let listOfChar = await fetch('https://character-database.becode.xyz/characters');
    let transformText = await listOfChar.json();
    console.log(transformText);
    // let template = document.getElementsById('tpl-char');
    // let target = document.getElementsById('target');



    TransformText.forEach(character => {
        // let clone = template.content.cloneNode(true);
        let image = document.querySelector('.img');
        let name = document.querySelector('.CharName');
        let shortDescription = document.querySelector('.charShortDescr');

        image.innerHTML = character.image;
        name.innerHTML = character.name;
        shortDescription.innerHTML = character.shortDescription;
        target.appendChild(clone);

    });
})();