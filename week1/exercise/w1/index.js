console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

const changeImageButton = document.querySelector('#btn-changeImage');
console.log('changeImageButton: ', changeImageButton);


function changeImage() {
  const image = document.getElementById('imageToChange');
  const imageInput = document.getElementById('imageInput');
  console.log("imageInput.value");
  image.src = imageInput.value;

}
changeImageButton.addEventListener("Click", changeImage);



// EXERCISE:
// select "change image" button (querySelector)
// add click event listener
// execute changeImage() function on click event
// define changeImage() function
// in this function:
//    get image element
//    get imageInput element
//    log input value
//    set image src to imageInput element value

// ====================================== //

// BONUS:
// select "add todo" button (querySelector)
const addToDoButton = document.querySelector('#btn-addTodo');
console.log('addToDoButton :', addToDoButton);
// add click event listener

// execute addTodo() function on click event
console.log("Click", addTodo());
function addToDo() {
  const todoList = document.querySelector('#todoList');
  const todoInput = document.querySelector('#todoInput');
  const liElement = document.createElement('li');
  liElement.innerHtml = todoInput.value;
  todoList.appendChild(liElement);
}
addToDoButton.addEventListener("Click", addToDo);
// define addTodo() function
// in this function:
//    get todoList element
//    get todoInput element
//    log todoInput element value
//    create <li> element
//    set <li> element innerHtml to todoInput value
//    add <li> element to todoList
