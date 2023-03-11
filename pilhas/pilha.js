
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


pilha.adicionarNovoItem(1)
pilha.adicionarNovoItem(2)
pilha.adicionarNovoItem(3)
pilha.adicionarNovoItem(4)


console.log(pilha.peek())
console.log(pilha.isEmpty())
pilha.print()
