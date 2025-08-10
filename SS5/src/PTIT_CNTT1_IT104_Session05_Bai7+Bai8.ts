class Books {
    private title: string;
    private author: string;
    private id: string;

    constructor(id: string, author: string, title: string){
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    setTitle(newTitle: string){
        this.title = newTitle;
    }

    getAuthor(){
        return this.author;
    }

    setAuthor(newAuthor: string) {
        this.author = newAuthor;
    }


}

class Libarrys{
    books: Books[] = [];

    addBook(book: Books){
        this.books.push(book);
    }

    printListBook(){
        console.log("danh sách sách trong thư viện");
        
        for(let i = 0; i<this.books.length;i++){

            console.log(`${this.books[i].getId()}: ${this.books[i].getAuthor()}, ${this.books[i].getTitle()}`);
        }
    }

    updateBookById(id: string, newAuthor: string, newTitle: string ){
        for(let book of this.books){
            if(book.getId() === id){
                book.setAuthor(newAuthor);
                book.setTitle(newTitle);
                console.log(`cap nhat thành công sach co id${id}`);
                return;
            }
        }
        console.log(`khong tin thay sach co id ${id}`);
        
    }

    searchBookByTitle(title: string){
    const foundBooks = this.books.filter(book => book.getTitle() === title);
        if(foundBooks.length > 0){
            console.log("Các sách tìm thấy:");
            for(let book of foundBooks){
                console.log(`${book.getId()}: ${book.getAuthor()}, ${book.getTitle()}`);
            }
        }else{
                console.log(`Không tìm thấy sách có tên "${title}"`);
            }
    }



}


let book1s = new Books("A1", "Tô Hoài", "Dế Mèn1");
let book2s = new Books("A2", "Tố Hữu", "Dế Mèn2");
let book3s = new Books("A3" ,"Tô Bút", "Dế Mèn3");
let book4s = new Books("A4" ,"Tô Tô", "Dế Mèn4");
let book5s = new Books("A5" ,"Tô Lam", "Dế Mèn5");

let librarys = new Libarrys();
librarys.addBook(book1s);
librarys.addBook(book2s);
librarys.addBook(book3s);
librarys.addBook(book4s);
librarys.addBook(book5s);

librarys.updateBookById("A3", "Ngô Tất Tố", "Tắt Đèn");
librarys.printListBook();
librarys.searchBookByTitle("Tắt Đèn");

