let currentplayer = "X";
let array = Array(9).fill(null);
var winner = false;
function checkwiinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2])  ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||  
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4]  == array[6])
  ) {
    console.log(currentplayer, "winner");
    win.style.display = "block";
    win.innerText = `${currentplayer}  is the winner`
    winner = true;
    btndiabled(winner);
  }
  if (
    array.every(function (value) {
      return value !== null;
    })
  )
   {
    console.log("no one is winner");
    win.innerText = "No  winner"  
    btn1.disabled=true
    btn2.disabled=true
  }
}

function buttonclick(element) {
  let ida = element.id;
  let valu = Number(ida);
  if (array[valu] === null) {
      if(currentplayer == "X"){
          btn1.disabled=false
          btn2.disabled=true
      }
        if(currentplayer == "O"){
            btn2.disabled=false
            btn1.disabled=true
        }
    array[valu] = currentplayer;
    element.innerText = currentplayer;
    checkwiinner();
    currentplayer == "X" ? (currentplayer = "O") : (currentplayer = "X");
    // console.log(array)
    disab();
    if(currentplayer == "X"){
        btn1.disabled=false
        btn2.disabled=true
    }
      if(currentplayer == "O"){
          btn2.disabled=false
          btn1.disabled=true
      }
  }
}
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", reset);
let cols = document.getElementsByClassName("col");
function reset(element, index) {
      for (let i = 0; i < 9; i++) {
        cols[i].innerText = "";
      }
  array = Array(9).fill(null);
  disab();
  if(currentplayer == "X"){
    btn1.disabled=false
    // btn2.disabled=false
}
  if(currentplayer == "O"){
      btn2.disabled=false
    //   btn1.disabled=false
  }
  win.style.display = "none";
}
function disab() {
    let dis = array.every(function (value) {
        return value == null;
    });
  if (dis) {
    document.getElementById("btn3").disabled = true;
    // console.log(dis)
  } else {
    document.getElementById("btn3").disabled = false;
  }
}

// if(currentplayer == "X"){
//     btn1.disabled=true
// }
let clas = document.getElementsByClassName('col')
function btndiabled(winner){
  for (let i = 0; i < 9; i++) {
    return clas[i].disabled = winner
  }
}