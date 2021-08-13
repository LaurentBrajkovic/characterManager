

(async() => {

    let current = window.location.href;

    let splittedCurrent = current.split('?');
    let idSplit = splittedCurrent[1];

    let template = document.getElementById("tpl-char");
    let target = document.getElementById("target");

    let server = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`);
    let charCard = await server.json();

    
    let character = template.content.cloneNode(true);
    
    character.getElementById("charIMG").src = `data:image/png;base64,${charCard.image}`;
    character.getElementById("charName").innerHTML = charCard.name;
    character.getElementById("shortDescr").innerHTML = charCard.shortDescription;
    character.getElementById("longDescr").innerHTML = charCard.description;
    character.getElementById("charUpdate").href = `charedit.html?${idSplit}`;
    target.appendChild(character);

    
    document.getElementById("charDelete").addEventListener("click", async () => {

        if(confirm("Are you sure you want delete this character") == true){
            const postData = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            });
            window.location.replace(`mainmenu.html`);
        }
        else{
            window.location.replace(`single.html?${idSplit}`)
        }
        
    });
}
)();