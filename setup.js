
// preserve the dimensions of the image
// there is a max width
// and there is a max height

// there is an absolte max (in terms of pixels)
// and a relative max (in terms of window.innerWidth and window.innerHeight

// the table will thus be the max size that window.innerWidth and window.innerHeight AND its max constraints will allow

// that way, when we transition from one picture to the next, nothing changes


// maybe i can do it all absolute positioning


let mytable;
let mybutton;
let myimage;
let englishName;
let frenchName;
let desc_en;
let desc_fr;
let current_row_id = -1;
let count = 0;
let arr;
 
window.addEventListener('load', function() {
  
  mytable = document.getElementById('mytable');
  mybutton = document.getElementById('mybutton');
  myimage = document.getElementById('myimage');
  englishName = document.getElementById('name_en');
  frenchName = document.getElementById('name_fr');
  desc_en = document.getElementById('desc_en');
  desc_fr = document.getElementById('desc_fr');
     
  let data = fetch('les_animaux.json?x=' + Math.random()).then(r => r.json()).then(a => {
     
     console.log(a);
     
     arr = [[],[]];
     for (let i = 0; i < a.length; i++) {
       arr[0].push(a[i]);
     }


     
     mybutton.addEventListener('click', function() {
       displayRow(getRow(arr));
     })
     
     displayRow(getRow(arr));

  });
  
  function getRow(arr) {
    
    //console.log(arr);
    
    if (arr[0].length === 0) {
      let x = arr.splice(0, 1); // remove the arr[0]
      arr.push([]);
      console.log('**reset**');
      // console.log(arr);
    }
    
    // console.log(arr); // what we select from
    
    let x = Math.floor(Math.random()*arr[0].length);
    let obj = arr[0].splice(x, 1)[0];
    arr[1].push(obj);
    console.log(arr); // what remains after the selection
    return obj;


  }

  function displayRow(row) {
    englishName.innerHTML = row["name_en"].toLowerCase();
    frenchName.innerHTML = row["name_fr"].toLowerCase();
    
    
    myimage.src = 'images/' + row["img_src"];
    myimage.alt = row["img_attribution"];
    
    desc_en.innerHTML = row["desc_en"];
    desc_fr.innerHTML = row["desc_fr"];
  }

}); // closing window.onload
