// tableau 1
// let tableauDebut = ['Salut', 'Bonjour', 'Salam', 'Bonsoir', 'Good'];
// let tableauMilieu = ['comment', 'tu-vas', 'como', 'est-ce-que', 'comment'];
// let tableauFin = ['vas-tu?', 'esta?', 'bien?', 'ca va?'];

let tableauDebut1 = ['Grimpe', 'Accroche toi', 'Tisse', 'Peter', 'Combat les'];
let tableauMilieu1 = ['méchant', 'vers', 'direction', 'avec persévérence', 'croit en toi'];
let tableauFin1 = ['la persévérance', 'le manoir', 'la lumière.', '.'];

let affichertext1 = document.getElementById('afficher');

function test() {

    while (affichertext1.firstChild) {
        affichertext1.removeChild(affichertext1.firstChild);
    }
    let moninput = document.getElementById('input1');
    for (i = 0; i < moninput.value; i++) {
        let tableauRandom1 = Math.floor(Math.random() * (tableauDebut1.length));
        let tableauRandom2 = Math.floor(Math.random() * (tableauMilieu1.length));
        let tableauRandom3 = Math.floor(Math.random() * (tableauFin1.length));
        let text2 = document.createElement('p');
        text2.innerText = tableauDebut1[tableauRandom1] + " " + tableauMilieu1[tableauRandom2] + " " + tableauFin1[tableauRandom3];
        affichertext1.appendChild(text2);
    }
}

let btnone = document.getElementById("btn1");
btnone.addEventListener('click', test)


// tableau 2
let tableauDebut2 = ['Les ténèbres', 'Le mal', 'Le spider rouge', 'Bonsoir', 'Croit'];
let tableauMilieu2 = ['te', 'est en toi', 'te suis', 'est un imposteur', 'en tes cauchemar'];
let tableauFin2 = ['pourchasse!', 'spider black', 'depuis toujours', 'le chaos'];




let affichertext = document.getElementById('afficher2');

function test2() {

    while (affichertext.firstChild) {
        affichertext.removeChild(affichertext.firstChild);
    }
    let moninput = document.getElementById('input1');
    for (i = 0; i < moninput.value; i++) {
        let tableauRandom4 = Math.floor(Math.random() * (tableauDebut2.length));
        let tableauRandom5 = Math.floor(Math.random() * (tableauMilieu2.length));
        let tableauRandom6 = Math.floor(Math.random() * (tableauFin2.length));
        let text = document.createElement('p');
        text.innerHTML = tableauDebut2[tableauRandom4] + " " + tableauMilieu2[tableauRandom5] + " " + tableauFin2[tableauRandom6];
        affichertext.appendChild(text);
    }
};

let btntwo = document.getElementById('btn2');
btntwo.addEventListener('click', test2);

//
let myform = document.getElementById('leinput');
let myinput = document.getElementById('input1');
let myerror = document.getElementById('error');

myinput.addEventListener('input', function () {

    let regex = /^[1-5]$/;
    console.log(myinput.value)

    if (myinput.value.trim() == "") {
        myerror.innerHTML = "Veullez renseigner ce champs.";
        myerror.style.color = "red"
    }
    if (e.preventDefault()){
        
    }
    else if(regex.test(myinput.value) == false) {
        myerror.innerHTML = "Veullez renseigner un nombre de 1 à 5 !";
        myerror.style.color = "red";
        
    }
    else {
        myerror.innerHTML = "";
    }

})




