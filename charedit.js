
    
    //Gather img and transform it's url
    //Output base64String
    var base64String = "";
  
    function imageUploaded() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];
  
    var reader = new FileReader();
    console.log("next");
      
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

            document.getElementById("importedIMG").src = `data:image/jpeg;base64,${base64String}`;
    }
    reader.readAsDataURL(file);
    }

(async() => {

    // gather ID
    let current = window.location.href;
    let splittedCurrent = current.split('?');
    let idSplit = splittedCurrent[1];

    // Fetch ID and display
    let server = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`);
    let charCard = await server.json();
    // Display with existing data
    base64String = charCard.image; 
    document.getElementById("importedIMG").src = `data:image/png;base64,${charCard.image}`;
    document.getElementById("inCharName").value = charCard.name;
    document.getElementById("inShortDescr").value = charCard.shortDescription;
    document.getElementById("inDescription").children[0].innerHTML = charCard.description;

    document.getElementById("inCharSave").addEventListener("click", async () => {
        //Gather all fields with data ID
        //Except with the IMG Base64 data
        let inputs = Array.from(document.querySelectorAll(".data"));
        const inDescription = document.getElementById("inDescription").children[0].innerHTML;
        // let imageSave = Array.from(document.querySelector(".imgData"));
        
        let values = inputs.map(({ value }) => {
          return value.trim();
        });
    
        if (values.some((value) => value === "")) {
          alert("Please fill in all fields");
          return;
        }
    
        let [name, shortDescription, image] = values;
    
        const postData = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name: `${name}`,
              shortDescription: `${shortDescription}`,
              description: `${inDescription}`,
              image: `${base64String}`,
            })
        });
        
        window.location.replace(`single.html?${idSplit}`);
      });

}
)();