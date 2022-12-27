// este código não programa nada em concreto, é apenas o registo explicado do ensinado na aula 2
var favoriteFood ="pizza"; //var permite definir uma variavel, tal como let
let numOfSlices = 8;
let undefined; //neste caso a variavel apenas foi declarada, poderia ser atribuido um valor mais tarde, neste caso será apenas undefined
console.log(favoriteFood); //imprime na console o valor da variavel
console.log(numOfSlices);
console.log(undefined);
//as proximas 4 linhas mostram uma alteração de uma variavel
let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe); 
// abaixo define-se uma constante
const entree =  "Enchiladas";
console.log(entree);
//entree = "tacos"; se esta linha não fosse comentada dava TypeError, por se estar a alterar um constante
//Exemplos de operações matemáticas com variaveis:
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
levelUp += 5; //soma 5 ao valor anterior da variavel
powerLevel -= 100; //substrair 100 ao valor anterior da variavel
multiplyMe *= 11; // o mesmo mas a multiplicar
quarterMe /=4; 
console.log('The value of levelUp:', levelUp); //a string pode ser concatenada com a variavel com uma , ou com um +
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++; //incrementa 1 unidade
lostDollar--; //decrementa 1 unidade
console.log(gainedDollar);
console.log(lostDollar);
//Exemplo de concatenação de strings com variaveis no console.log():
favoriteAnimal = "Cat";
console.log("My favorite animal: " + favoriteAnimal)
let myName = "Dinis";
let myCity = "Lisbon";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`); //para ser utilizada a interpolação (string com variaveis pelo meio) deve ser utilizado `texto`
// exemplo de alteração de tipo de uma variavel
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); //typeof retorna o tipo da variavel seguinte
newVariable = 1;
console.log(typeof newVariable);
