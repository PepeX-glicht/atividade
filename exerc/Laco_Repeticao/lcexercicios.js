
//Text
//Text

function exercicio_while() {

    let i = 0;
    while (i < 5) {
    console.log(i);
    i++;
    }
}

//Text
//Text

function exercicio_dowhile() {

    let j = 0;
    do {
    console.log(j);
    j++;
    } while (j < 5);
}

//Text
//Text

function exercicio_for() {

    for (let k = 0; k < 5; k++) {
    console.log(k);
    }
}

//Text
//Text

function exercicio_foreach() {

    let numeros = [1,2,3];
    numeros.forEach(n => console.log(n));
}

//Text
//Text

function exercicio_map() {

    let dobro = numeros.map(n => n * 2);
    console.log(dobro);
}


exercicio_while();