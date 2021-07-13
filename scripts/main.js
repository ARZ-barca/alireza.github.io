let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coolimage.jpg') {
        myImage.setAttribute('src','images/coolimage2.jpeg');
        myHeading.textContent = 'a wolf'
    } else {
        myImage.setAttribute('src','images/coolimage.jpg');
        myHeading.textContent = 'a dragon'
    }
}
let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
   
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
