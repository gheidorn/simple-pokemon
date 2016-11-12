'use strict'

const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
  main.openWindow()
}, false)
document.body.appendChild(button)

var submitButton = document.getElementById('submit-login')
button.addEventListener('click', () => {
  localStorage.setItem('username', 'OwenAugustus')
  console.log('saved username to local storage')
}, false)
