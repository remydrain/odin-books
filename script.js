const myShelf = [];
const bookshelf = document.querySelector('.shelf');
const card = document.querySelector('.card');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}.`
    }
}

function getBookFromInput() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
}

function addBookToLibrary(book) {
    myShelf.push(book);
}

function showBooks() {
    myShelf.forEach((i) => createCard)
}

function createCard(book) {
    
}

showBooks()