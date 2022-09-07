const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};


const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
const print =(e)=>console.log(e);

const sendMarsTemperature = (callback)=> {
   callback(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`) 
}
// crie a função sendMarsTemperature abaixo

 setTimeout(()=> sendMarsTemperature(print), messageDelay()); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

//setTimeout(()=>console.log(planetDistanceFromSun(mars)),4000);
//console.log(planetDistanceFromSun(mars)); // A
//setTimeout(() =>console.log(planetDistanceFromSun(venus)),3000); // B
//setTimeout(()=> console.log(planetDistanceFromSun(jupiter)),2000); // C