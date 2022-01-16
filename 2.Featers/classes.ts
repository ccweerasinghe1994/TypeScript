class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("honk");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  driveProcess(): void {
    console.log(this.drive());
    console.log(this.honk());
  }
}

const vehicle = new Vehicle("red");
const car = new Car(4, "orange");

car.driveProcess();
