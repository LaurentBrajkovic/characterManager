
(async() => {

    const template = document.getElementById("tpl-char");
    let target = document.getElementById("target");
    let server = await fetch("https://character-database.becode.xyz/characters");
    let charCard = await server.json(); 

    charCard.forEach(({id, image, name, shortDescription})=> {
        let character = template.content.cloneNode(true);
        character.getElementById("charIMG").src = `data:image/png;base64,${image}`;
        character.getElementById("charName").innerHTML = name;
        character.getElementById("shortDescr").innerHTML = shortDescription;
        character.getElementById("charLink").href = `single.html?${id}`;
        target.appendChild(character);
    });
})();

  document.getElementById('charSearch').addEventListener('keyup',()=>{
        // Declare variables
        let input = document.getElementById('charSearch');
        let filter = input.value.toUpperCase();
        let cards = document.querySelectorAll('#container');
        // Loop through all list items, and hide those who don't match the search query
        for (let i = 0; i < cards.length; i++) {
          let h4 = cards[i].querySelector('#charName');
          let txtValue = h4.textContent || h4.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
          } else {
            cards[i].style.display = "none";
          }
        }
  })