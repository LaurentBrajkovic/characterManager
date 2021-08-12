

(async() => {

    const template = document.getElementById("tpl-char");
    let target = document.getElementById("target");

    let server = await fetch("https://character-database.becode.xyz/characters");
    let charCard = await server.json(); 

    charCard.forEach(({image, name, shortDescription})=> {

        let character = template.content.cloneNode(true);
        console.log(charCard);
        character.getElementById("charIMG").src = `data:image/png;base64,${image}`;
        character.getElementById("charName").innerHTML = name;
        character.getElementById("shortDescr").innerHTML = shortDescription;

        target.appendChild(character);
    });

})();

    

