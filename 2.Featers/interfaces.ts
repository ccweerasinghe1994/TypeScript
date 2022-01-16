interface Reportable {
  summery(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summery(): string {
    return `Name:${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summery(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummery = (item: Reportable): void => {
  const { summery } = item;
  console.log(summery());
};

printSummery(oldCivic);
printSummery(drink);
