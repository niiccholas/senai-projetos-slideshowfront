'use strict'

async function fetchImagens(){

    const url = `https://senai-projetos-slideshowback.onrender.com/imagens`;

    const response = await fetch(url);
    const data = await response.json();

    return data
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
    await preencherImagens()
};
