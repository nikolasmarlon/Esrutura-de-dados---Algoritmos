
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




//INSERINDO ELEMENTOS NO ARRAY

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numeros)

numeros[10] = 10
console.log(numeros)

numeros[numeros.length] = 11
console.log(numeros)


//Obs. acima nao é a melhor forma de inserir elementos no array
// O array tem alguns métodos nativos e um dos métodos se chama push que insere elemento ao final do array
numeros.push(12)
numeros.push(13)
numeros.push(14)
numeros.push(15)
numeros.push(16)
console.log(numeros)

//Para inserir elementos antes usamos o método unshift()
numeros.unshift(-1)
numeros.unshift(-2)

console.log(numeros)


//REMOVENDO ELEMENTOS

//Método Pop() retira o ultimo elemento do array
numeros.pop()
console.log(numeros)

//Método shift() retira elemento do início do array
numeros.shift()
console.log(numeros)

//INSERINDO E REMOVENDO DE POSIÇÕES ESPECÍFICAS

//REMOVENDO
//Com método splice(posição inicial, quantidade de casas) Remove elementos do array

//Em nosso exemplo vamos remover os elementos que estão nos indeces [4, 5, 6, 7], o que vai apagar os números 3, 4, 5, 6
numeros.splice(4, 4)
console.log(numeros)

//INSERINDO
//Com o mesmo método splice() inserimos elementos
// splice(posicialInicial, adiciona 0, para inserir, os elementos que serão adiconados)


numeros.splice(4, 0, 6, 6, 6, 6)
console.log(numeros)


// Arrays bidimensionais

var temperaturaMediaSemanal = []

var temperaturaSemana1 = [33, 32, 20, 34, 42, 21]
var temperaturaSemana2 = [34, 36, 21, 36, 48, 23]
var temperaturaSemana3 = [13, 42, 26, 35, 45, 24]
var temperaturaSemana4 = [13, 42, 26, 35, 45, 24]


temperaturaMediaSemanal[0] = temperaturaSemana1
temperaturaMediaSemanal[1] = temperaturaSemana2
temperaturaMediaSemanal[2] = temperaturaSemana3
temperaturaMediaSemanal[3] = temperaturaSemana4


console.log(temperaturaMediaSemanal)

//para acessar um indece dentro do array bidimensional precisamos de dois índices 
//imprime o primeiro indice do primeiro array
console.log('temperatura no indece [0][0] ' + temperaturaMediaSemanal[0][0])


//imprimindo todos os indices do array bidimensional 

for(var i = 0; i < temperaturaMediaSemanal.length; i++){
    for(var j = 0; j < temperaturaMediaSemanal[i].length; j++){
        console.log(temperaturaMediaSemanal[i][j])
    }
}

var mes = [temperaturaMediaSemanal]

//imprime todo o array tridimensional
console.log(mes)

//imprime o primeiro indice do array temperaturaSemana1, que está dentro do array temperaturaMediaSemanal, que está dentro do array mes
console.log(mes[0][0][0])


//imprimindo todos os indices do array tridimensional

for(var i = 0; i < mes.length; i++){
    
    for(var j = 0; j < mes[i].length; j++){
        console.log("Semana")
        for(var k = 0; k < mes[i][j].length; k++){
            console.log("Dia " + mes[i][j][k])
        }
    }
}