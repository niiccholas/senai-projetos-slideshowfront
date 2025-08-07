'use strict'

async function fetchImagens(){

    const url = `https://senai-projetos-slideshowback.onrender.com/imagens`;

    const response = await fetch(url);
    const data = await response.json();

    return data
}

function loadingPoints(){


    const pontos = document.getElementById("loadingPoints")

    // primeira maneira de fazer

    let contador = 0 // começa em 0 para começar com 1 ponto (pois o contador vai aumentar)

    setInterval(() => {


        if(contador != 3){ // quando for 3 vai resetar pra 1
            contador++
        }else{
            contador = 1
        }

        pontos.textContent = ".".repeat(contador) // string.repeat(quantidade de vezes)
        
    }, 700); // intervalo de meio segundo (500 milissegundos)

}


async function preencherImagens(){

    const data = await fetchImagens()
    const fotoHTML = document.getElementsByClassName('foto')[0]
    const legenda = document.getElementsByClassName('legenda')[0]

    let contador = 1

    fotoHTML.src = data[0].foto
    legenda.textContent = data[0].legenda

    setInterval(() => {


        if(contador == data.length){
            contador = 0
        }


        fotoHTML.style.opacity = 0

        setTimeout(() => {
            
        fotoHTML.src = data[contador].foto

        legenda.textContent = data[contador].legenda

        fotoHTML.onload = () => {
            fotoHTML.style.opacity = 1;
        };

        contador++

        }, 200);
        
    }, 3700);



}
window.onload = async function() {

    loadingPoints()

     const loading = document.getElementById('carregando')
    await preencherImagens()

   loading.style.opacity = 0

};
