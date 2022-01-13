
const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function devide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string) => {
  console.log(message);

  // // we can return
  // return null;
  // return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  weather,
  date,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(weather);
  console.log(date);
};

console.log(logWeather(todaysWeather));

