"use strict";
class Book {
    constructor(author, title) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Libarry {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printListBook() {
        console.log("danh sách sách trong thư viện");
        for (let i = 1; i < this.books.length; i++) {
            console.log(`${i}: ${this.books[i].getAuthor()}, ${this.books[i].getTitle()}`);
        }
    }
}
let book1 = new Book("Tô Hoài", "Dế Mèn1");
let book2 = new Book("Tố Hữu", "Dế Mèn2");
let book3 = new Book("Tô Bút", "Dế Mèn3");
let book4 = new Book("Tô Tô", "Dế Mèn4");
let book5 = new Book("Tô Lam", "Dế Mèn5");
let library = new Libarry();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printListBook();
