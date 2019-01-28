const todos = [];
let quit = false;

function addTodo() {
    let todo = prompt("Please enter a todo: ")

    if (todo) {
        todos.push(todo);
        console.log("Todo has been added!")
    }
}

function removeTodo(){
    let id = Number.parseInt(prompt("Please enter an id: "))

    if(id > todos.length - 1){
        console.log("The item doesn't exist!")
        return;
    }
    todos.splice(id, 1)
    console.log("You removed a todo!")
}

function listTodos()
{
    console.log("*************");
    todos.forEach(function(todo){
        console.log(todos.indexOf(todo) + ". " + todo)
    })
    console.log("*************");
}

function quitList(){
    quit = true;
    console.log("Ok, you quit the app")
}

function main() {
    const commands = {
        list: listTodos,
        new: addTodo,
        quit: quitList,
        delete: removeTodo
    }

    while(!quit){
        var option = prompt("What would you like to do?");

        if(commands.hasOwnProperty(option)){
            commands[option]()
        }else{
            console.log("Invalid command! Please use the available commands")
        }
    }
}

main()