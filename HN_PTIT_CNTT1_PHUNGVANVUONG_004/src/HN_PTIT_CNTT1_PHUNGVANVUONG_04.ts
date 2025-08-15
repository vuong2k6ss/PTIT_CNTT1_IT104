class Audience {
    static idCounter = 1;
    id: number;
    name: string;
    email: string;
    phone: string;
  constructor(name: string, email: string, phone: string) {
    this.id = Audience.idCounter++;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
  }
}

abstract class Movie{
    private static Nextid = 1;
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean;

    constructor(title: string, genre: string, ticketPrice: number, isShowing: boolean){
        this.id = Movie.Nextid++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.isShowing = isShowing;
    }

    startShow(){
        this.isShowing = true;
    }

    stopShow(){
        this.isShowing = false;
    }


    abstract caculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string;
    abstract getMovieInfo(): string;

}

class ActionMovie extends Movie {
    constructor(title: string, genre: string, ticketPrice: number, isShowing: boolean){
        super(title, genre, ticketPrice, isShowing);
    }

    caculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

    getSpecialOffers(): string {
        return `"mienx phí bắp rang", "tặng poster"`;
    }

    getMovieInfo(): string {
        return `"phim hành đọng gay cấn, kỹ xảo hoành tráng"`;
    }
}

class ComedyMovie extends Movie {
    constructor(title: string, genre: string, ticketPrice: number, isShowing: boolean){
        super(title, genre, ticketPrice, isShowing);
    }

    caculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

    getSpecialOffers(): string {
        return `"giảm 10% cho nhóm trên 4 người"`;
    }

    getMovieInfo(): string {
        return `"phim hài nhẹ nhàng, vui nhộn"`;
    }
}

class AnimationMovie extends Movie {
    constructor(title: string, genre: string, ticketPrice: number, isShowing: boolean){
        super(title, genre, ticketPrice, isShowing);
    }

    caculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }

    getSpecialOffers(): string {
        return `"giảm giá cho trẻ em dưới 12 tuổi"`;
    }

    getMovieInfo(): string {
        return `"phim hoạt hình với hình ảnh sống động"`;
    }
}

class TicketBooking {
  static idCounter = 1;
    bookingId: number;
    audience: Audience;
    movie: Movie;
    quantity : number;
    totalPrice: number;
  constructor(bookingId: number, audience: Audience, movie: Movie, quantity: number, totalPrice: number) {
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

class Cinema {
    movies: Movie[] = [];
    audiences: Audience[] = [];
    bookings: TicketBooking[] = [];

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  addAudience(name: string, email: string, phone: string) {
    const audience = new Audience(name, email, phone);
    this.audiences.push(audience);
    return audience;
  }

  bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null {
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

  cancelMovie(movieId: number): void {
    const movie = this.findMovieById(this.movies, movieId);
    if (movie) {
      movie.stopShow();
      console.log(`Movie "${movie.title}" đã dừng.`);
    } else {
      console.log("phim không khả dụng");
    }
  }

  listShowingMovies() {
    const showingMovies = this.movies.filter(movie => movie.isShowing);
    if (showingMovies.length === 0) {
      console.log("không có phim nào đang chiếu");
    } else {
      console.log("phim đang chiếu:");
      showingMovies.forEach(movie => {
        console.log(`ID: ${movie.id}, Title: ${movie.title}, Genre: ${movie.genre}, Price: ${movie.ticketPrice}`);
      });
    }
  }

  listAudienceBookings(audienceId: number) {
    const audienceBookings = this.bookings.filter(booking => booking.audience.id === audienceId);
    if (audienceBookings.length === 0) {
      console.log("No bookings found for this audience.");
    } else {
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

  getMovieSpecialOffers(movieId: number) {
    const movie = this.findMovieById(this.movies, movieId);
    if (movie) {
      console.log(`"${movie.title}":`);
      movie.getSpecialOffers().forEach(offer => console.log(`- ${offer}`));
    } else {
      console.log("phim không khả dụng");
    }
  }

  findMovieById (collection: Movie[], id: number): Movie | undefined{
    return collection.find(movie => movie.id === id);
  }

  findAudienceById(collection: Audience[], id: number):  Audience | undefined  {
    return collection.find(audience => audience.id === id);
  }

  findTicketBookingById(collection: TicketBooking[], id: number): TicketBooking | undefined {
    return collection.find(booking => booking.bookingId === id);
  }


  findById(collection: TicketBooking[], id: number) {
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

async function handleChoice(choice) {
  switch (choice) {
    case '1':
      await addNewAudience();
      break;
    case '2':
      await addNewMovie();
      break;
    case '3':
      await bookTickets();
      break;
    case '4':
      await cancelMovie();
      break;
    case '5':
      cinema.listShowingMovies();
      break;
    case '6':
      await listAudienceBookings();
      break;
    case '7':
      console.log(`Total Revenue: ${cinema.calculateTotalRevenue()}`);
      break;
    case '8':
      cinema.getMovieGenreCount();
      break;
    case '9':
      await findById();
      break;
    case '10':
      await getMovieSpecialOffers();
      break;
    case '0':
      rl.close();
      return false;
    default:
      console.log("lua chon khong hop le.");
  }
  return true;
}

async function addNewAudience() {
  const name = await prompt("nhập tên khán giả: ");
  const email = await prompt("nhập email: ");
  const phone = await prompt("nhập phone: ");
  const audience = cinema.addAudience(name, email, phone);
  console.log(`Added new audience with ID: ${audience.id}`);
}

async function addNewMovie() {
  console.log("chọn thể loại phim:");
  console.log("1. Action");
  console.log("2. Comedy");
  console.log("3. Animation");
  const type = await prompt("lựa chọn của bạn: (1-3): ");
  
  const title = await prompt("nhập tên phim: ");
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
}

async function bookTickets() {
  const audienceId = parseInt(await prompt("id khán giả: "));
  const movieId = parseInt(await prompt("id phim: "));
  const quantity = parseInt(await prompt("số lượng vé: "));
  
  const booking = cinema.bookTickets(audienceId, movieId, quantity);
  if (booking) {
    console.log("Booking thành công:");
    console.log(booking.getDetails());
  }
}

async function cancelMovie() {
  const movieId = parseInt(await prompt("nhập id phim để ngừng chiếu: "));
  cinema.cancelMovie(movieId);
}

async function listAudienceBookings() {
  const audienceId = parseInt(await prompt("nhập id khán giả: "));
  cinema.listAudienceBookings(audienceId);
}

async function findById() {
  console.log("nhập id tìm kiếm cho:");
  console.log("1. Movie");
  console.log("2. Audience");
  console.log("3. Booking");
  const type = await prompt("lựa chọn của bạn (1-3): ");
  
  const id = parseInt(await prompt("nhập id tìm kiếm: "));
  let item;
  
  switch (type) {
    case '1':
      item = cinema.findMovieById(cinema.movies, id);
      if (item) {
        console.log(`phim: ${item.title}, Genre: ${item.genre}, Showing: ${item.isShowing ? 'Yes' : 'No'}`);
      } else {
        console.log("phim khong khả dụng.");
      }
      break;
    case '2':
      item = cinema.findAudienceById(cinema.audiences, id);
      if (item) {
        console.log(`khán giả: ${item.getDetails()}`);
      } else {
        console.log("khán giả không khả dụng.");
      }
      break;
    case '3':
      item = cinema.findTicketBookingById(cinema.bookings, id);
      if (item) {
        console.log(`thông tin vé đặt: ${item.getDetails()}`);
      } else {
        console.log("thông tin không khả dụng.");
      }
      break;
    default:
      console.log("Invalid choice.");
  }
}

async function getMovieSpecialOffers() {
  const movieId = parseInt(await prompt("nhập id phim: "));
  cinema.getMovieSpecialOffers(movieId);
}

async function main() {
  let running = true;
  while (running) {
    displayMenu();
    const choice = await prompt("lựa chọn của bạn (0-10): ");
    running = await handleChoice(choice);
  }
}

main().then(() => {
  console.log("Goodbye!");
}).catch(err => {
  console.error("lỗi:", err);
});




































