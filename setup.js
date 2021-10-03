
let mytable;
let mybutton;
let myimage;
let englishName;
let frenchName;
let desc_en;
let desc_fr;

window.onload = function() {
  
  let data = fetch('les_animaux.json?x=' + Math.random()).then(r => r.json()).then(arr => {
     
     console.log(arr);
     mytable = document.getElementById('mytable');
     mybutton = document.getElementById('mybutton');
     myimage = document.getElementById('myimage');
     englishName = document.getElementById('english-name');
     frenchName = document.getElementById('french-name');
     desc_en = document.getElementById('desc_en');
     desc_fr = document.getElementById('desc_fr');
     
     mybutton.addEventListener('click', function() {
       displayRow(getRow(arr));
     })
     
     displayRow(getRow(arr));

  });
  
  function getRow(arr) {
    let x = Math.floor(Math.random()*arr.length);
    return arr[x];
  }

  function displayRow(row) {
    englishName.innerHTML = row["name_en"].toLowerCase();
    frenchName.innerHTML = row["name_fr"].toLowerCase();
    
    
    myimage.src = 'images/' + row["img_src"];
    myimage.alt = row["img_attribution"];
    
    desc_en.innerHTML = row["desc_en"];
    desc_fr.innerHTML = row["desc_fr"];
  }
}



   
   
   

