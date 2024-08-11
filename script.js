function converterQuantidade() {
    let quantidade = Number(inQuantidade.value);
    let deUnidade = optDeUnidade.value;
    let paraUnidade = optParaUnidade.value;

/*     if (quantidade <= 0) {
        alert('Informe uma quantidade válida!');
        inQuantidade.focus();
        return;
    } 

    if (deUnidade === '') {
        alert('Selecione a unidade de origem!');
        optDeUnidade.focus();
        return;
    } else if (paraUnidade === '') {
        alert('Selecione a unidade de destino!');
        optParaUnidade.focus();
        return;
    } else if (deUnidade === paraUnidade) {
        alert('As unidades não podem ser iguais!');
        optParaUnidade.focus();
        return;
    } */

    if (deUnidade === 'mm') {
        if (paraUnidade === 'cm') {
            return quantidade / 10;
        } else if (paraUnidade === 'm') {
            return quantidade / 1000;
        } else if (paraUnidade === 'km') {
            return quantidade / 1000000;
        }
    } else if (deUnidade === 'cm') {
        if (paraUnidade === 'm') {
            return quantidade / 100;
        } else if (paraUnidade === 'km') {
            return quantidade / 100000;
        } else if (paraUnidade === 'mm') {
            return quantidade / 10;
        }
    } else if (deUnidade === 'm') {
        if (paraUnidade === 'km') {
            return quantidade / 1000;
        } else if (paraUnidade === 'mm') {
            return quantidade / 100000;
        } else if (paraUnidade === 'cm') {
            return quantidade / 100;

        }
    } else if (deUnidade === 'km') {
        if (paraUnidade === 'mm') {
            return quantidade / 1000000000;
        } else if (paraUnidade === 'cm') {
            return quantidade / 100000000;
        } else if (paraUnidade === 'm') {
            return quantidade / 1000;
        }
    }
}

let btnConverter = document.querySelector('.btnConverter');
btnConverter.addEventListener('click', converterQuantidade);

let outFeedback = document.querySelector('.outFeedback');
outFeedback.textContent = `${quantidade} ${ deUnidade }`;