const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});

window.requestAnimFrame = function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback)
        }
    )
}

const axios = require('axios');
const fs = require('fs');


const url = 'https://www.example.com';


async function downloadPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors du téléchargement de la page', error);
    throw error;
  }
}


function saveToFile(content, fileName) {
  fs.writeFileSync(fileName, content, 'utf-8');
  console.log(`Le contenu a été enregistré dans le fichier : ${fileName}`);
}


downloadPage(url)
  .then((pageContent) => {
    saveToFile(pageContent, 'page.html');
  })
  .catch((error) => {
    console.error('Une erreur s\'est produite : ', error);
  });












  function talk(){
    var know = {
    "T'es qui?" : "Slt, c'est le ash :)",
    "T'es ki?" : "Slt, c'est le ash :)",
    "T'es qui" : "Slt, c'est le ash :)",
    "T'es ki" : "Slt, c'est le ash :)",
    "T qui?" : "Slt, c'est le ash :)",
    "T ki?" : "Slt, c'est le ash :)",
    "T qui" : "Slt, c'est le ash :)",
    "T ki" : "Slt, c'est le ash :)",
    "Tu vas bien?" : "Ouaip :)",
    "Quels logiciels utilise tu pour coder?" : "Visual Studio Code.",
    "Quel logiciel utilise tu pour coder?" : "Visual Studio Code.",
    "Tu code depuis quand?" : "Depuis Mars 2023",
    "Tu fais du montage depuis quand?" : "Depuis Décembre 2020",
    "Quels logiciels utilise tu pour monter?" : "Adobe première pro,Adobe after effect,Davinci Resolve 18.",
    "T'es payant?" : "Je me fais paraitre payant pour le moment mais je suis free:) ",
    "Ta appris comment a coder?" : "Avec internet et plein de pdf remplis de code avec explication. ",
    "C'est dur de coder?" : "Le codage web avec le language (html,css c'est simple mais javascript et php des languages un peu plus compliqué) ",
    "Tu connais quel langage au codage?" : "Intérmédiaire-Expert:HTML,CSS,JS-Débutant: PHP,PYTHON,C++ ",
    "Tu code combien de temps?" : "Environ 5-6h par semaine jusqu'à 10-12h semaine. ",
    "Ta pris combien de temps a coder?" : "En 6mois j'ai plutot bien avancer. ",
    "Ta quel âge?" : "T'inquète :) 😁",
    "Ta quel age?" : "T'inquète :)😁 ",
    "On code sur quoi?" : "Sur PC. Confing fluide suffisant. ",
    "On monte avec quel confing?" : "Avec les logiciels gourmants il faut au moins une RTX 2060-I5 10TH GEN pour etre tranquille. ",
    "ok" : "de rien ",
    "Ok" : "de rien ",
    "Bye" : "Salut!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Excuse,c'est pas une question fréquente.<br>";
    }
    }
