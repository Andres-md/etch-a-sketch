// INITIAL VARIABLES AND ELEMENTS

let header =document.createElement("header");
const body = document.getElementById("body");
const container= document.getElementById('container');
header.setAttribute('id','buttons');
body.insertBefore(header ,container);


//create 16x16 grid divs

  function createDivs(x){
      container.style.setProperty('--rows',x);
      container.style.setProperty('--column',x);
      let numberOfDivs=(x*x);
      for(i=0;i<numberOfDivs;i++){
        const childrenDiv=document.createElement('div');
        childrenDiv.setAttribute('style','border: 1px solid black');
        childrenDiv.setAttribute('id','childrenDiv') 
        container.appendChild(childrenDiv);
    
      };
};

createDivs(16);

//black function

function mouseOver(){
  let children = event.target;
  children.style.backgroundColor= "black";
  };

// Random color function 

function getRandomColor(){
  
  let randomColor = (Math.random()*16).toString(16).slice(8);
  let hexaColor ="#" + randomColor ;
  let color=event.target;
  color.style.backgroundColor= hexaColor;
  };


// shade function pendiente!!
function shade(){
  let shade=event.target
  shade.style.backgroundColor= 'hsl (0,0%,100%)';
  
}

  //handlers 

//CLEAR ALL BUTTON 
let btnClearAll=document.createElement('button');
    btnClearAll.setAttribute('id','btn1');
    btnClearAll.textContent= 'Clear All';
    header.appendChild(btnClearAll);
    btnClearAll.addEventListener('click',clearAllButton);

function clearAllButton(){
  container.innerHTML='';
  let gridSize= prompt('How many squares per side ?');
  createDivs(gridSize);
  container.removeEventListener('mouseover',mouseOver);
  container.removeEventListener('mouseover',getRandomColor); 
  
   };

// RANDOM COLOR BUTTON
let btnRandomColor=document.createElement('button');
    btnRandomColor.setAttribute('id','btn2');
    btnRandomColor.textContent= 'Random Color';
    header.appendChild(btnRandomColor);

    btnRandomColor.addEventListener('click',getRandom);

function getRandom(){
  
  container.addEventListener('mouseover',getRandomColor)
};

//BLACK COLOR BUTTON
let btnBlackColor=document.createElement('button');
    btnBlackColor.setAttribute('id','btn3');
    btnBlackColor.textContent= 'Black Color';
    header.appendChild(btnBlackColor);

    btnBlackColor.addEventListener('click',mouseBlack)

function mouseBlack(){
  
  container.addEventListener('mouseover',mouseOver);
}



