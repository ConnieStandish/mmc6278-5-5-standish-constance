var form = document.querySelector('form')

var ulElement = document.getElementById('todo-list')

var btn = document.getElementById('button')

form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')
    var userInput = input.value
    input.value = ""
    console.log(userInput)
    if (!userInput || !userInput.trim()) return
    var liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    var buttonElement = document.createElement('button')
    liElement.appendChild(buttonElement)
    buttonElement.textContent = userInput

    buttonElement.addEventListener('click', function() {
        buttonElement.style = 'text-decoration: line-through'
    }, false)

    liElement.addEventListener('click', function() {
        liElement.style.display = 'none'
    }, true)
    
    // liElement.addEventListener('click', function() {
    //     liElement.style.display = 'none'
    // }, true)

    // buttonElement.addEventListener('click', firstClick)

    // function firstClick() {
    //     buttonElement.style = 'text-decoration: line-through'
    // }

    // liElement.addEventListener('click', secondClick)

    // function secondClick() {
    //     liElement.style.display = 'none'
    // }
    }

    // liElement.ondblclick = function() {
    //     liElement.style.display = 'none'
    // }










