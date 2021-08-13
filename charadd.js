// Init fields

// IMG Convertion
// Variable to be exported: base64String
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

// Gather & Export data 

    document.getElementById("inCharAdd").addEventListener("click", async () => {

      let inputs = Array.from(document.querySelectorAll(".data"));
  
      let values = inputs.map(({ value }) => {
        return value.trim();
      });
  
      if (values.some((value) => value === "")) {
        alert("Please fill in all fields");
        return;
      }
  
      let [name, shortDescription, description] = values;
      let id = null;
  
      const postData = await fetch("https://character-database.becode.xyz/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, shortDescription, description, image:base64String}),
      });
      console.log(postData);
      console.log(postData.json());

      window.location.replace(`mainmenu.html`);
    });

