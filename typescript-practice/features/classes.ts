class Vehicle {
  color: string = "red";

  constructor(public model: string, color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string, model: string) {
    super(model, color);
  }

  private drive(): void {
    console.log("vroom vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(5, "red", "2020");
//car.drive(); Property 'drive' is private and only accessible within class 'Car'.
car.startDrivingProcess();
//car.honk(); Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.ts

const vehicle = new Vehicle("2020", "orange");
console.log(vehicle.color);
