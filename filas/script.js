

//clase Fila
function Fila() {
    var itens = []

    this.enfileirar = function(elemento){
        //adiciona um novo elemento
        itens.push(elemento)

    }

    this.desenfileirar = function(){
        //remove elemento
        return itens.shift() 
    }

    this.frente = function(){
        //retorna o primeiro elemento da fila
        return itens[0]
    }
    
    this.verSeEstaVazio = function(){
        //verifica se a fila está vazia ou não
        return itens.length === 0 
    }

    this.tamanho = function(){
        //retorna o tamanho da fila
        return itens.length

    }

    this.imprimir = function(){
        //imprime a fila no console
        console.log(itens.toString())
    }
}