//Declare variables
//Access data in form by pressing add button or enter key
//Typed item must appear in ul#todo-list element below form
//Create li element
//Create button element
//Append item in a button element nested in li element
//Use form submit event

var form = document.querySelector('form')

var ulElement = document.getElementById('todo-list')


//Access data in form
form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')
    var userInput = input.value
    input.value = ""
    console.log(userInput)
    var buttonElement = document.createElement('button')
    var liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.appendChild(buttonElement)
    buttonElement.textContent = userInput

    if (!userInput)
    return false
}

//When clicked item through line must toggle on liElement
ulElement.onclick = function() {
    this.classList.toggle('line-through')
}








