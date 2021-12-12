//clase de interaccion de los botones

class Display {
    constructor(displayValorAnterior, displayValorActual)
    {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined; //guardar tipo der operacion
        this.valorActual = '';//numeros guardados
        this.valorAnterior = '' ;
        this.signos = {
            sumar: '+',
            dividir: '%',
            restar: '-',
            multiplicar: '*'
        };
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1); //se recorta solamente su ultimo numero
        this.imprimirValores();//actualize el display
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual + numero;
        this.imprimirValores();
    }

    //para poder implimir en la pnatalla

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior =parseFloat(this.valorAnterior); //se hace asi para poder parciar entre string y numeros
        const valorActual =parseFloat(this.valorActual);//guaradado como numeros

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual)//busca los tipos y los ejecuta
    }



}