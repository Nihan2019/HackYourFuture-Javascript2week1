console.log('Hack your future, right?!');

const header = document.querySelector('h1');
console.log('header: ', header);

const changeImageButton = document.querySelector('#btn-changeImage');
console.log('changeImageButton: ', changeImageButton);



const changeImage = () => {
  console.log('Click');
}
function changeImage() {
  const image = document.getElementById('imageToChange');
  const imageInput = document.getElementById('imageInput');
  console.log("imageInput.value");
  image.src = imageInput.value;

}
changeImageButton.addEventListener("Click", () => {
  console.log("Click");
});



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
// add click event listener
// execute addTodo() function on click event
// define addTodo() function
// in this function:
//    get todoList element
//    get todoInput element
//    log todoInput element value
//    create <li> element
//    set <li> element innerHtml to todoInput value
//    add <li> element to todoList
