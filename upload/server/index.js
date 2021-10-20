const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

var button = document.querySelector('.increase-btn');
var counter = document.querySelector('.counter');

button.addEventListener('click', function(){
  counter.value = parseInt(counter.value) + 100; 
});

var button = document.querySelector('.decrease-btn');
var counter = document.querySelector('.counter');

button.addEventListener('click', function(){
  counter.value = parseInt(counter.value) - 100; 
});

document.querySelector("form").addEventListener("submit", addPlayer);
const message = document.querySelector('#message')

function addPlayer(event){
  event.preventDefault();
  let inputField = document.querySelector('input')
  
  
  const player = document.createElement('li')

  const playerName = document.createElement("span");
  playerName.textContent = inputField.value;
  player.appendChild(playerName)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deletePlayer);
  player.appendChild(deleteBtn);
  

  const list = document.querySelector("ul");
  list.appendChild(player);

  inputField.value = ''
}
function deletePlayer(event) {
     event.target.parentNode.remove();
}
function revealMessage() {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

