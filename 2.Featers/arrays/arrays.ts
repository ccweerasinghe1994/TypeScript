const CarMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carByMake: string[][] = [["f150"], ["corrolla"], ["camaro"]];

// help with inferance when extracting values

const car = CarMakers[0];
const myCar = CarMakers.pop();
console.log(myCar);

// prevent us from entering incompatible values into the array

// CarMakers.push(100)
CarMakers.map((car:string):string=>{
    return car.toLowerCase();

})

// const importanatDates = [new Date(),'20018-1-12'];
const importanatDates:(string|Date)[] =[];
importanatDates.push(new Date());
importanatDates.push("20018-1-12");
