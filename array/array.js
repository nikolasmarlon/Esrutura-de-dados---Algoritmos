
//array de nomes 
var arrayNomes = []

//Atribuindo nomes aos índeces do array
arrayNomes[0] = 'Nikolas'
arrayNomes[1] = 'José'
arrayNomes[2] = 'Emanuel'
arrayNomes[3] = 'Emanuely'


console.log(arrayNomes[2]) 

//imprime o tamanho do array
console.log('Tamanho do array arrayNomes ' + arrayNomes.length) 

//Outra forma de iniciar um array
var diasDaSemana = new Array()

//atribuindo os dias da semana

diasDaSemana[0] = 'Domingo'
console.log(diasDaSemana[0]) 
//imprime o tamanho do array
console.log('Tamanho do array diasDaSemana ' + diasDaSemana.length) 


//Posso inicializar o array atribuindo um tamanho
var meses = new Array(12)

//imprime o tamanho do array
console.log('Tamanho do array meses ' + meses.length) 


//Posso inicializar o array já atribuindo valores para os índices 

var mesesDoAno = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril')

//imprime o tamanho do array
console.log('Tamanho do array mesesDoAno ' + mesesDoAno.length) 


//OBS. A melhor prática nao é utilizando Objeto Array()