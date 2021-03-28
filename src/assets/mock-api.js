function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const cities = ["Brisbane", "Melbourne", "Sydney", "Perth", "Adelaide", "Canberra"];
const streets = ["Kings Way", "EastLink", "West Gate Fwy", "Western Fwy", "Hoddle St", "Springvale Rd"];

const mockWeatherData = () => {
  return new Promise((resolve) => {
    const temp = getRandomNumber(24, 46);
    const city = cities[getRandomNumber(0, cities.length)];

    const humidity = getRandomNumber(0, 101);
    const chanceOfRain = Math.floor(humidity * 0.92);
    const wind = getRandomNumber(0, 80);
    const tomorrowTemp = getRandomNumber(24, 46);
    setTimeout(() => {
      return resolve({
        city,
        temp,
        weather: "sunny",
        time: new Date().toDateString(),
        humidity,
        chanceOfRain,
        wind,
        tomorrowTemp,
      });
    }, 1000);
  });
};

const mockRouteData = () => {
  return new Promise((resolve) => {
    // Mock data with 5 routes
    const routes = [];
    for (let i = 0; i < 4; i++) {
      const time = getRandomNumber(0, 50);
      const distance = getRandomNumber(0, 50);
      const city = cities[getRandomNumber(0, cities.length)];
      const street1 = streets[getRandomNumber(0, streets.length)];
      const street2 = streets[getRandomNumber(0, streets.length)];
      routes.push({
        city,
        time,
        distance,
        street1,
        street2,
      });
    }
    // console.log(routes);

    setTimeout(() => {
      return resolve(routes);
    }, 1000);
  });
};

const getRampAlgorithms = (onUpdate) => {
  const count = 50;

  setInterval(() => {
    const ramps = [];

    for (let i = 0; i < count; i++) {
      ramps.push({
        id: `ramp-${i}`,
        algorithm: [
          "Algorithm 1",
          "Algorithm 2",
          "Algorithm 3",
          "Algorithm 4",
          "Algorithm 5",
        ][Math.floor(Math.random() * 5)],
      });
    }

    onUpdate(ramps);
  }, 500);
}

export { mockWeatherData,  mockRouteData, getRampAlgorithms };
