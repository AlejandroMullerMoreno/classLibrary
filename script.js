const myLibrary = [{name: "Crime and Punishment"}, {name: "Kafka On The Shore"}];

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  const body = document.querySelector('body');
  e.preventDefault();
  let nameOfBook = document.querySelector("[name='name_book']").value
  myLibrary.push({name: nameOfBook})
  let nextBook = document.createElement('div');
  nextBook.textContent = nameOfBook;
  body.appendChild(nextBook);
  dialog.close();


});

function Book(name){
    this.name = name;
}

function addBookToLibrary(){
    // do stuff here

}

function displayLibrary(){
    const body = document.querySelector('body');
    for (let book of myLibrary){
        let nextBook = document.createElement('div');
        console.log(book.name);
        nextBook.textContent = book.name;
        body.appendChild(nextBook);
    }
}


displayLibrary();



