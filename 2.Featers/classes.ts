// class Vehicle {

//     constructor(public color:string){

//     }
//   public drive(): void {
//     console.log("chugga chugga");
//   }

//   public honk(): void {
//     console.log("beep");
//   }
// // }
// class Car extends Vehicle {
//     constructor(public wheels:number,color:string){
//         super('red');

//     }
//    drive(): void {
//     console.log("vroom");
//   }
// }
// const vehicle = new Vehicle('orange');

// // console.log("hello w");
// // vehicle.honk();
// // vehicle.honk();
// // vehicle.honk();
// // vehicle.honk();
// // vehicle.drive();

// const car = new Car(12,'vlue');
// // car.drive();

class Vehicle {
  drive(): void {
    console.log("chugga chhugga");
  }
}

const vehicle = new Vehicle();

vehicle.drive();
