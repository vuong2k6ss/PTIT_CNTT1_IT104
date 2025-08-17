abstract class Flight {
  constructor(
    public flightNumber: string,
    public origin: string,
    public destination: string,
    public departureTime: Date,
    public capacity: number,
    public bookedSeats: number = 0
  ) {}

  bookSeat(): boolean {
    if (!this.isFull()) {
      this.bookedSeats++;
      return true;
    }
    return false;
  }

  isFull(): boolean {
    return this.bookedSeats >= this.capacity;
  }

  abstract calculateBaggageFee(weight: number): number;
}

class DomesticFlight extends Flight {
  calculateBaggageFee(weight: number): number {
    return weight * 50000; 
  }
}

class InternationalFlight extends Flight {
  calculateBaggageFee(weight: number): number {
    return weight * 10; 
  }
}

class Passenger {
  private static idCounter = 1;
  public passengerId: number;

  constructor(public name: string, public passportNumber: string) {
    this.passengerId = Passenger.idCounter++;
  }

  getDetails(): string {
    return `ID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
  }
}

class Booking {
  private static idCounter = 1;
  public bookingId: number;
  public totalCost: number;

  constructor(
    public passenger: Passenger,
    public flight: Flight,
    public numberOfTickets: number
  ) {
    this.bookingId = Booking.idCounter++;
    this.totalCost = numberOfTickets * 100; 
  }

  getBookingDetails(): string {
    return `BookingID: ${this.bookingId}, Passenger: ${this.passenger.name}, Flight: ${this.flight.flightNumber}, Tickets: ${this.numberOfTickets}, Total: ${this.totalCost}`;
  }
}

class GenericRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  findIndex(predicate: (item: T) => boolean): number {
    return this.items.findIndex(predicate);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter(item => !predicate(item));
  }
}

class AirlineManager {
  private flightRepo = new GenericRepository<Flight>();
  private passengerRepo = new GenericRepository<Passenger>();
  private bookingRepo = new GenericRepository<Booking>();

  addFlight(flight: Flight): void {
    this.flightRepo.add(flight);
  }

  addPassenger(name: string, passportNumber: string): void {
    const p = new Passenger(name, passportNumber);
    this.passengerRepo.add(p);
    console.log("Thêm hành khách thành công");
  }

  createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): Booking | null {
    const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);

    if (passenger && flight && !flight.isFull()) {
      const booking = new Booking(passenger, flight, numberOfTickets);
      this.bookingRepo.add(booking);
      for (let i = 0; i < numberOfTickets; i++) flight.bookSeat();
      console.log("Đặt vé thành công");
      return booking;
    }
    console.log("Đặt vé thất bại");
    return null;
  }

  cancelBooking(bookingId: number): void {
    this.bookingRepo.remove(b => b.bookingId === bookingId);
    console.log("Đã hủy booking");
  }

  listAvailableFlights(origin: string, destination: string): void {
    const available = this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
    console.log("Danh sách chuyến bay còn chỗ:");
    available.forEach(f => console.log(f.flightNumber, f.departureTime, f.capacity - f.bookedSeats, "chỗ trống"));
  }

  listBookingsByPassenger(passengerId: number): void {
    const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
    bookings.forEach(b => console.log(b.getBookingDetails()));
  }

  calculateTotalRevenue(): number {
    return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
  }

  countFlightsByType(): void {
    const result = this.flightRepo.getAll().reduce(
      (acc, f) => {
        if (f instanceof DomesticFlight) acc.domestic++;
        else if (f instanceof InternationalFlight) acc.international++;
        return acc;
      },
      { domestic: 0, international: 0 }
    );
    console.log("Số chuyến bay nội địa:", result.domestic, " - Quốc tế:", result.international);
  }

  updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
    const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
    if (flight) {
      flight.departureTime = newDepartureTime;
      console.log("Cập nhật giờ bay thành công!");
    }
  }

  getFlightPassengerList(flightNumber: string): void {
    const passengers = this.bookingRepo.getAll()
      .filter(b => b.flight.flightNumber === flightNumber)
      .map(b => b.passenger.getDetails());

    console.log("Danh sách hành khách của chuyến bay", flightNumber);
    passengers.forEach(p => console.log(p));
  }
}

const manager = new AirlineManager();

let choice: number;
do {
  console.log("\n===== MENU =====");
  console.log("1. Thêm hành khách");
  console.log("2. Thêm chuyến bay");
  console.log("3. Tạo giao dịch đặt vé");
  console.log("4. Hủy giao dịch đặt vé");
  console.log("5. Hiển thị chuyến bay còn trống");
  console.log("6. Hiển thị vé đã đặt của hành khách");
  console.log("7. Tính tổng doanh thu");
  console.log("8. Đếm số lượng chuyến bay theo loại");
  console.log("9. Cập nhật giờ bay");
  console.log("10. Danh sách hành khách của chuyến bay");
  console.log("11. Thoát");

  choice = Number(prompt("Chọn: "));

  switch (choice) {
    case 1:
      const name:string = prompt("Tên: ")||"";
      const passport:string = prompt("Hộ chiếu: ")||"";
      manager.addPassenger(name, passport);
      break;

    case 2:
      const type = prompt("Loại chuyến bay: ");
      const flightNumber:string = prompt("Số hiệu chuyến bay: ")||"";
      const origin:string = prompt("Nơi đi: ")||"";
      const destination:string = prompt("Nơi đến: ")||"";
      const inputTime = prompt("Thời gian khởi hành: ");
      if (!inputTime) {
        console.log("Bạn chưa nhập thời gian, mặc định dùng ngày hiện tại");
      }
      const time = inputTime ? new Date(inputTime) : new Date();

      const capacity = Number(prompt("Sức chứa: "));
      if (type === "d") manager.addFlight(new DomesticFlight(flightNumber, origin, destination, time, capacity));
      else manager.addFlight(new InternationalFlight(flightNumber, origin, destination, time, capacity));
      console.log("Thêm chuyến bay thành công!");
      break;

    case 3:
      const pid = Number(prompt("ID hành khách: "));
      const fnum:string = prompt("Số hiệu chuyến bay: ")||"";
      const tickets = Number(prompt("Số lượng vé: "));
      manager.createBooking(pid, fnum, tickets);
      break;

    case 4:
      const bid = Number(prompt("Booking ID: "));
      manager.cancelBooking(bid);
      break;

    case 5:

        const o:string = prompt("Nơi đi: ")||"";
        const d:string = prompt("Nơi đến: ")||"";
        manager.listAvailableFlights(o, d);
        break;

    case 6:
      const pid2 = Number(prompt("ID hành khách: "));
      manager.listBookingsByPassenger(pid2);
      break;

    case 7:
      console.log("Tổng doanh thu:", manager.calculateTotalRevenue());
      break;

    case 8:
      manager.countFlightsByType();
      break;

    case 9:{
        const fn:string = prompt("Số hiệu chuyến bay: ") || "";
        const inputTime:string = prompt("Thời gian mới: ") || "";
        const newTime:Date = new Date(inputTime);
        manager.updateFlightTime(fn, newTime);
        break;
    }
    case 10:
      const fn2 = prompt("Số hiệu chuyến bay: ")|| "";
      manager.getFlightPassengerList(fn2);
      break;
    case 11:
      console.log("Thoát chương trình");
      break;
    default:
        console.log("Lựa chọn ko hợp lệ");
    }
} while (choice !== 11);