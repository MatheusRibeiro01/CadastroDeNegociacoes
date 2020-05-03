class ListaNegociacoes {
    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);

    }

    get negociacoes(){
        //concatenando uma cópia da lista para que nada seja feito na lista original
        return [].concat(this._negociacoes);

    }

    esvazia(){

        this._negociacoes = [];
    }
}