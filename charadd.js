document.getElementById('inCharAdd').addEventListener('click', ()=>{
    let inputImage = document.getElementById('inCharIMG');
    let inputCharName = document.getElementById('inCharName');
    let inputCharShortDescr= document.getElementById('inShortDescr');
    let inputCharDescription= document.getElementById('inDescription');
});

// //  let fileSelector = document.getElementById('inCharIMG');
// //  console.log(fileSelector)
// //  fileSelector.addEventListener('change', (event)=>{
// //     const fileList = event.target.files;
// //     console.log(fileList);
// })

const fileSelector = document.getElementById('inCharIMG');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});

