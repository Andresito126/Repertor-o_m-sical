import {bst} from "./dependencies.js";
import Cancion from "../models/Cancion.js";

//add
let añadir = document.getElementById("btn-add")
añadir.addEventListener("click", ()=>{

    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let gender = document.getElementById("gender").value
    let albumName = document.getElementById("albumName").value
    if (title && author && gender && albumName) {
        let cancion = new Cancion(title, author, gender, albumName);
        bst.add(cancion);
        alert("Se  ha agregado correctamente la canción.");
        
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

//serch

let buscar = document.getElementById("btn-search");
buscar.addEventListener("click", ()=>{
    const song = document.getElementById("searchSong").value;
    const searchResult = document.getElementById("searchResult");
    
    if (song){
        let result = bst.search(song)
        if(result){
            alert("Canción encotrada: " + JSON.stringify(song))
            searchResult.innerHTML = `
                <p>Canción encontrada.</p>
                <p>Nombre: ${result.title}</p>
                <p>Autor: ${result.author}</p>
                <p>Género: ${result.gender}</p>
                <p>Nombre del álbum: ${result.albumName}</p>`;
        }
        else {
            searchResult.textContent = "Canción No encontrada:";
        }
    }
    else {
        alert("ERROR. No ingreso nada.");
        searchResult.textContent = "Canción No encontrada. "
    }
});

    //buscar valor minimo

let searchMinNode = document.getElementById("btn-min");
searchMinNode.addEventListener("click", ()=>{
    const searchMin = document.getElementById("searchMin");
    const minNode = bst.min();
    if(minNode){
        alert("Canción con nombre más corto: " + JSON.stringify(minNode.title))
        searchMin.innerHTML = `
        <p>Canción encontrada. </p>
        <p>Nombre: ${minNode.title}</p>
        <p>Autor: ${minNode.author}</p>
        <p>Género: ${minNode.gender}</p>
        <p>Nombre del álbum: ${minNode.albumName}</p>`;

    }else{
        alert("No existe")
        searchMin.textContent = "Canción encontrada. "
    }
});    





    //buscar valor maximo

let searchMaxNode = document.getElementById("btn-max");
searchMaxNode.addEventListener("click", ()=>{
    const searchMax = document.getElementById("searchMax");
    const maxNode = bst.max();
    if(maxNode){
        alert("Canción con nombre más corto: " + JSON.stringify(maxNode.title))
        searchMax.innerHTML = `
        <p>Canción encontrada. <p>
        <p>Nombre: ${maxNode.title}</p>
        <p>Autor: ${maxNode.author}</p>
        <p>Género: ${maxNode.gender}</p>
        <p>Nombre del álbum: ${maxNode.albumName}</p>`;
    }else{
        alert("No existe")
        searchMax.textContent = "Canción encontrada. " 
    }
});



    //mostar todas las canciones

let showAllButton = document.getElementById('btn-show');
 const showResult = document.getElementById('showResults');

showAllButton.addEventListener('click', () => {
    bst.inOrder(song => {
        showResult.innerHTML += `
            <p>Nombre: ${song.title}</p>
        `;
    });
});

