interface Reportable {
  summery(): string;
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summery(): string {
    return `Name:${this.name}`;
  }
};

const drink = {
  color: "brown",
  carbanated: true,
  suger: 40,
  summery(): string {
    return `My drink has ${this.suger} grams of suger`;
  }
};

const printSummery = (item: Reportable): void => {
  console.log(item.summery());
};

printSummery(oldCivic);
printSummery(drink);
