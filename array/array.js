
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

var mesesDoAno = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

//imprime o tamanho do array
console.log('Tamanho do array mesesDoAno ' + mesesDoAno.length) 


//OBS. A melhor prática nao é utilizando Objeto Array()



// ACESSANDO ELEMENTOS ATRAVÉS DA ITERAÇÃO

console.log("Iterando arrays")

//Imprimir todos os elementos do array
for(var i = 0; i < mesesDoAno.length; i++){
    console.log(`Mês: ${mesesDoAno[i]}`)
}

//Fibonacci   a soma dos dois anteriores é o resultado do posterior
var fibonacci = []

// iniciar com 3 posições
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 30; i++){
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i -1]
}


console.log(fibonacci)