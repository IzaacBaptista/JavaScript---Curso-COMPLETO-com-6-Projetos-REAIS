//criando uma função

function somar(x1, x2){

	return x1 + x2;
}

//chamando a função no console

let resultado = somar(1, 2);

console.log(resultado);

/********************************************/

function calc(x1, x2, operator){

	return eval('${x1} ${operator} ${x2}');

}

let (resultado) = calc(1, 2, "+");

console.log(resultado);


/********************************************/
//criando uma função anônima

(function(x1, x2, operator){

	return eval('${x1} ${operator} ${x2}');
})(1, 2, "+");

let (resultado) = calc(1, 2, "+");

console.log(resultado);


/********************************************/
//criando uma Arrow Function

let calc(x1, x2, operator){ => 

	return eval'${x1} ${operator} ${x2}';
}

let (resultado) = calc(1, 2, "+");

console.log(resultado);

/**********************************************/
//CRIANDO EVENTOS
window.addEventListener('focus', event => {

	console.log("focus");

});

document.addEventListener('click', event =>{ 

	console.log('click');

}):











































