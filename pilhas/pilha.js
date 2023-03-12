
//Para trabalhar com pilhas no JS usamos Classes, onde implementamos os metodos para manipularmos a pilha
//Classe pilha
function Pilha(){
    var itens = []

    this.adicionarNovoItem = function(elemento){
        //adiciona um novo item à pilha
        itens.push(elemento)
    }

    this.removerItem = function(){
        //remove o item do topo da pilha

        //pop retira o ultimo elemento da pilha
        return itens.pop()
    }

    this.peek = function(){
        //Retorna o elemento que está no topo da pilha
        return itens[itens.length - 1]
    }

    this.isEmpty = function(){
        //Informa se a pilha está vazia ou não

        //verifica se o tamanho do array(pilha) é igual a zero
        return itens.length === 0
    }

    this.clear = function(){
        //Limpa a pilha

        //atribui um array vazio
        itens = []
    }

    this.size = function(){
        //informar o tamanho da pilha

        return itens.length
    }

    this.print = function(){
        //imprime a pilha no console

        console.log(itens.toString())
    }
}


//instacia do objeto
var pilha = new Pilha()


//Exercício converter decimal para binário
// este exercício usa pilhas para implementar o algorítimo

function decimalParaBinario(numeroDecimal) {


    var pilhaDeRestos = [],
    resto,
    stringDeBinarios = ''

    while(numeroDecimal > 0){

        //arredonda para baixo o resto da divisão 
        resto = Math.floor(numeroDecimal % 2)

        //adiciona à pilha os restos
        pilhaDeRestos.push(resto)

        // A cada volta ele divide o decimal por 2 e testa novamente 
        numeroDecimal = Math.floor(numeroDecimal / 2)
    }

    console.log(pilhaDeRestos)
    while(pilhaDeRestos.length > 0){

        //pega o ultimo item do array pilhaderestos e adiciona na stringDeBinarios um a um para inverter a string pilhaDeBinarios e ficar na ordem certa, aplicando o conceito de pilha, onde o ultimo a entrar é o primeiro a sair
        stringDeBinarios += pilhaDeRestos.pop().toString()
    }
    

    return stringDeBinarios
}


console.log(decimalParaBinario(23))