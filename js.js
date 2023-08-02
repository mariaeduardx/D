//determinei o valor do kelvin
const kelvin = 293;

//transformei o kelvin em celsius
const celsius = kelvin - 273;

//transformei celsius em fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Eu arredondei o fahrenheit para baixo
fahrenheit = Math.floor(fahrenheit);

//eu fiz ele imprimir o resultado do fahrenheit na tela
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);

//tranformei celsius em newton e arredondei para baixo
const newton = Math.floor(celsius * (33 / 100));

//eu fiz ele imprimir o resultado do newton na tela
console.log(`A temperatura é ${newton} graus Newton.`)
