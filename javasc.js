function resetFlexbox() {
    document.querySelector('.flexboxcontainer').style.gap = '0px';
    document.querySelector('.flexboxcontainer').style.flexDirection = 'row';
    document.querySelector('.flexboxcontainer').style.justifyContent = 'flex-start';
    document.querySelector('.flexboxcontainer').style.alignItems = 'flex-start';
    document.getElementById('gap').value = 0;
    resetFlexGrow();
}

function updateFlexbox() {
    let gap = document.getElementById('gap').value;
    document.querySelector('.flexboxcontainer').style.gap = gap + 'px';
}

function setFlexDirection(direction) {
    document.querySelector('.flexboxcontainer').style.flexDirection = direction;
}

function setJustifyContent(justify) {
    document.querySelector('.flexboxcontainer').style.justifyContent = justify;
}

function setAlignItems(align) {
    document.querySelector('.flexboxcontainer').style.alignItems = align;
}

function resetFlexGrow() {
    let items = document.querySelectorAll('.items');
    items.forEach(item => {
        item.style.flexGrow = 0;
    });
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
}

function setFlexGrowAll() {
    let items = document.querySelectorAll('.items');
    items.forEach(item => {
        item.style.flexGrow = 1;
    });
}

function updateFlexGrow(boxNumber) {
    let growValue = document.getElementById(`box${boxNumber}`).value;
    document.getElementById(`item${boxNumber}`).style.flexGrow = growValue;
}


// function reset(){
//   counter = 0;
//   c.value = counter;
// }
