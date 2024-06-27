let c = document.getElementById("count");
let counter = 0;

function counting(i, j) {
  if (i == 1) {
    counter++;
  } else if (i == 2) {
    counter--;
  } else if (i == 0) {
    counter = 0;
  }
  c.value = counter;
  c.style.backgroundColor = j;
  c.style.color = 'white';

  // if (counter < 0){
  //   c.style.backgroundColor = j;
  //   c.style.color = 'white';
  // }

  // else if (counter >= 0 && counter <= 9){
  //   c.style.backgroundColor = j;
  //   c.style.color = 'white';
  // }

  // else if(counter > 10){
  //   c.style.backgroundColor = j;
  //   c.style.color = 'white';
  // }

}

// function inc(){
//   counter++;
//   c.value = counter;
// }

// function dec(){
//   counter--;
//   c.value = counter;
// }

// function reset(){
//   counter = 0;
//   c.value = counter;
// }
