"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Audience {
    constructor(name, email, phone) {
        this.id = Audience.idCounter++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
Audience.idCounter = 1;
class Movie {
    constructor(title, genre, ticketPrice, isShowing) {
        this.id = Movie.Nextid++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.Nextid = 1;
class ActionMovie extends Movie {
    constructor(title, genre, ticketPrice, isShowing) {
        super(title, genre, ticketPrice, isShowing);
    }
    caculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return `"mienx phí bắp rang", "tặng poster"`;
    }
    getMovieInfo() {
        return `"phim hành đọng gay cấn, kỹ xảo hoành tráng"`;
    }
}
class ComedyMovie extends Movie {
    constructor(title, genre, ticketPrice, isShowing) {
        super(title, genre, ticketPrice, isShowing);
    }
    caculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return `"giảm 10% cho nhóm trên 4 người"`;
    }
    getMovieInfo() {
        return `"phim hài nhẹ nhàng, vui nhộn"`;
    }
}
class AnimationMovie extends Movie {
    constructor(title, genre, ticketPrice, isShowing) {
        super(title, genre, ticketPrice, isShowing);
    }
    caculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return `"giảm giá cho trẻ em dưới 12 tuổi"`;
    }
    getMovieInfo() {
        return `"phim hoạt hình với hình ảnh sống động"`;
    }
}
class TicketBooking {
    constructor(bookingId, audience, movie, quantity, totalPrice) {
        this.bookingId = TicketBooking.idCounter++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails() {
        return `Booking ID: ${this.bookingId}, 
Audience: ${this.audience.name}, 
Movie: ${this.movie.title}, 
Quantity: ${this.quantity}, 
Total Price: ${this.totalPrice}`;
    }
}
TicketBooking.idCounter = 1;
class Cinema {
    constructor() {
        this.movies = [];
        this.audiences = [];
        this.bookings = [];
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    addAudience(name, email, phone) {
        const audience = new Audience(name, email, phone);
        this.audiences.push(audience);
        return audience;
    }
    bookTickets(audienceId, movieId, quantity) {
        const audience = this.findAudienceById(this.audiences, audienceId);
        const movie = this.findMovieById(this.movies, movieId);
        if (!audience || !movie) {
            console.log("khán giả hoặc phim không khả dụng");
            return null;
        }
        if (!movie.isShowing) {
            console.log("hiện tại phim không được chiếu!");
            return null;
        }
        const booking = new TicketBooking(audience, movie, quantity);
        this.bookings.push(booking);
        return booking;
    }
    cancelMovie(movieId) {
        const movie = this.findMovieById(this.movies, movieId);
        if (movie) {
            movie.stopShow();
            console.log(`Movie "${movie.title}" đã dừng.`);
        }
        else {
            console.log("phim không khả dụng");
        }
    }
    listShowingMovies() {
        const showingMovies = this.movies.filter(movie => movie.isShowing);
        if (showingMovies.length === 0) {
            console.log("không có phim nào đang chiếu");
        }
        else {
            console.log("phim đang chiếu:");
            showingMovies.forEach(movie => {
                console.log(`ID: ${movie.id}, Title: ${movie.title}, Genre: ${movie.genre}, Price: ${movie.ticketPrice}`);
            });
        }
    }
    listAudienceBookings(audienceId) {
        const audienceBookings = this.bookings.filter(booking => booking.audience.id === audienceId);
        if (audienceBookings.length === 0) {
            console.log("No bookings found for this audience.");
        }
        else {
            console.log(`Bookings for audience ID ${audienceId}:`);
            audienceBookings.forEach(booking => {
                console.log(booking.getDetails());
            });
        }
    }
    calculateTotalRevenue() {
        return this.bookings.reduce((total, booking) => total + booking.totalPrice, 0);
    }
    getMovieGenreCount() {
        const genreCount = this.movies.reduce((count, movie) => {
            count[movie.genre] = (count[movie.genre] || 0) + 1;
            return count;
        }, {});
        console.log("Thể loại phim:");
        for (const genre in genreCount) {
            console.log(`${genre}: ${genreCount[genre]}`);
        }
    }
    getMovieSpecialOffers(movieId) {
        const movie = this.findMovieById(this.movies, movieId);
        if (movie) {
            console.log(`"${movie.title}":`);
            movie.getSpecialOffers().forEach(offer => console.log(`- ${offer}`));
        }
        else {
            console.log("phim không khả dụng");
        }
    }
    findMovieById(collection, id) {
        return collection.find(movie => movie.id === id);
    }
    findAudienceById(collection, id) {
        return collection.find(audience => audience.id === id);
    }
    findTicketBookingById(collection, id) {
        return collection.find(booking => booking.bookingId === id);
    }
    findById(collection, id) {
        return collection.find(item => item.id === id);
    }
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cinema = new Cinema();
cinema.addMovie(new ActionMovie("Đánh nhau 5"));
cinema.addMovie(new ComedyMovie("Hài Hàn Xẻng"));
cinema.addMovie(new AnimationMovie("Tom và jerry"));
cinema.addAudience("nam than", "NAm@gmail.com", "0123456789");
cinema.addAudience("Sơn Nguyễn", "Son@gmail.com", "0987654321");
function displayMenu() {
    console.log("\n=== Movie Ticket Booking Management System ===");
    console.log("1. Thêm khán giả mới");
    console.log("2. Thêm phim mới");
    console.log("3. Đặt vé");
    console.log("4. Ngừng chiếu phim");
    console.log("5. Hiển thị danh sách phim đang chiếu");
    console.log("6. Hiển thị các đặt vé của một khán giả");
    console.log("7. Tính và hiển thị tổng doanh thu");
    console.log("8. Đếm số lượng từng thể loại phim");
    console.log("9. Tìm kiếm và hiển thị thông tin bằng mã định danh");
    console.log("10. Hiển thị ưu đãi của một phim");
    console.log("0. Thoát");
}
function prompt(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}
function handleChoice(choice) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (choice) {
            case '1':
                yield addNewAudience();
                break;
            case '2':
                yield addNewMovie();
                break;
            case '3':
                yield bookTickets();
                break;
            case '4':
                yield cancelMovie();
                break;
            case '5':
                cinema.listShowingMovies();
                break;
            case '6':
                yield listAudienceBookings();
                break;
            case '7':
                console.log(`Total Revenue: ${cinema.calculateTotalRevenue()}`);
                break;
            case '8':
                cinema.getMovieGenreCount();
                break;
            case '9':
                yield findById();
                break;
            case '10':
                yield getMovieSpecialOffers();
                break;
            case '0':
                rl.close();
                return false;
            default:
                console.log("lua chon khong hop le.");
        }
        return true;
    });
}
function addNewAudience() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield prompt("nhập tên khán giả: ");
        const email = yield prompt("nhập email: ");
        const phone = yield prompt("nhập phone: ");
        const audience = cinema.addAudience(name, email, phone);
        console.log(`Added new audience with ID: ${audience.id}`);
    });
}
function addNewMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("chọn thể loại phim:");
        console.log("1. Action");
        console.log("2. Comedy");
        console.log("3. Animation");
        const type = yield prompt("lựa chọn của bạn: (1-3): ");
        const title = yield prompt("nhập tên phim: ");
        let movie;
        switch (type) {
            case '1':
                movie = cinema.addMovie(new ActionMovie("bố già", "tình cảm", 2, true));
                break;
            case '2':
                movie = cinema.addMovie(new ComedyMovie("bố già 2 ", "tình cảm 22 ", 4, true));
                break;
            case '3':
                movie = cinema.addMovie(new AnimationMovie("bố khỏe", "tình cảm ", 5, true));
                break;
            default:
                console.log("lựa chọn không hợp lệ.");
                return;
        }
        console.log(`thêm mới phim với id: ${movie.id}`);
    });
}
function bookTickets() {
    return __awaiter(this, void 0, void 0, function* () {
        const audienceId = parseInt(yield prompt("id khán giả: "));
        const movieId = parseInt(yield prompt("id phim: "));
        const quantity = parseInt(yield prompt("số lượng vé: "));
        const booking = cinema.bookTickets(audienceId, movieId, quantity);
        if (booking) {
            console.log("Booking thành công:");
            console.log(booking.getDetails());
        }
    });
}
function cancelMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieId = parseInt(yield prompt("nhập id phim để ngừng chiếu: "));
        cinema.cancelMovie(movieId);
    });
}
function listAudienceBookings() {
    return __awaiter(this, void 0, void 0, function* () {
        const audienceId = parseInt(yield prompt("nhập id khán giả: "));
        cinema.listAudienceBookings(audienceId);
    });
}
function findById() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("nhập id tìm kiếm cho:");
        console.log("1. Movie");
        console.log("2. Audience");
        console.log("3. Booking");
        const type = yield prompt("lựa chọn của bạn (1-3): ");
        const id = parseInt(yield prompt("nhập id tìm kiếm: "));
        let item;
        switch (type) {
            case '1':
                item = cinema.findMovieById(cinema.movies, id);
                if (item) {
                    console.log(`phim: ${item.title}, Genre: ${item.genre}, Showing: ${item.isShowing ? 'Yes' : 'No'}`);
                }
                else {
                    console.log("phim khong khả dụng.");
                }
                break;
            case '2':
                item = cinema.findAudienceById(cinema.audiences, id);
                if (item) {
                    console.log(`khán giả: ${item.getDetails()}`);
                }
                else {
                    console.log("khán giả không khả dụng.");
                }
                break;
            case '3':
                item = cinema.findTicketBookingById(cinema.bookings, id);
                if (item) {
                    console.log(`thông tin vé đặt: ${item.getDetails()}`);
                }
                else {
                    console.log("thông tin không khả dụng.");
                }
                break;
            default:
                console.log("Invalid choice.");
        }
    });
}
function getMovieSpecialOffers() {
    return __awaiter(this, void 0, void 0, function* () {
        const movieId = parseInt(yield prompt("nhập id phim: "));
        cinema.getMovieSpecialOffers(movieId);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let running = true;
        while (running) {
            displayMenu();
            const choice = yield prompt("lựa chọn của bạn (0-10): ");
            running = yield handleChoice(choice);
        }
    });
}
main().then(() => {
    console.log("Goodbye!");
}).catch(err => {
    console.error("lỗi:", err);
});
