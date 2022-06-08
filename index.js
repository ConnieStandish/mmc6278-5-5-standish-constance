//Declare variables
//Access data in form by pressing add button or enter key
//Typed item must appear in ul#todo-list element below form
//Create li element
//Create button element
//Append item in a button element nested in li element
//Use form submit event

var form = document.querySelector('form')

var buttonElement = document.createElement('button')

var liElement = document.createElement('li')

var ulElement = document.getElementById('todo-list')


//Access data in form
form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')
    console.log(input.value)
    input.value = ""

    var todoText = input.value
    liElement.appendChild(document.createTextNode(todoText))
    ulElement.appendChild(liElement, buttonElement)
    // textAppear()
    // ulElement.appendChild(liElement)

    if (input.value === todoText) {
        input.value = todoText
    } else {
        return null
    }
}

//Handle typed items outside form
// function textAppear() {
    
// }

