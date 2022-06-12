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

    buttonElement.onclick = function() {
        var checkClick = buttonElement.style.textDecoration === 'line-through'
        if (checkClick) {
            liElement.remove()
        } else {
            buttonElement.style.textDecoration = 'line-through'
        }
    }
    }











