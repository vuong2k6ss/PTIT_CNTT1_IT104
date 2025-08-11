class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: LendedBook[];
    status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: string;

    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((b) => {
            console.log(`ID: ${b.id}, Title: ${b.title}, Author: ${b.author}, Stock: ${b.stock}, Status: ${b.status}`);
        });
    }
}

const library = new Library();


const book1 = new Book(1, "Lập trình C++", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book(2, "TypeScript cơ bản", "Trần Thị B", 3, "Có sẵn");
const book3 = new Book(3, "Học HTML & CSS", "Lê Văn C", 2, "Có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
