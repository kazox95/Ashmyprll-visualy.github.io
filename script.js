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
    "t'es qui?" : "Slt, c'est le ash :)",
    "t'es ki?" : "Slt, c'est le ash :)",
    "t'es qui" : "Slt, c'est le ash :)",
    "t'es ki" : "Slt, c'est le ash :)",
    "t qui?" : "Slt, c'est le ash :)",
    "t ki?" : "Slt, c'est le ash :)",
    "t qui" : "Slt, c'est le ash :)",
    "t ki" : "Slt, c'est le ash :)",
    "Tu vas bien?" : "Ouaip :)",
    "tu vas bien?" : "Ouaip :)",
    "Quels logiciels utilises tu pour coder?" : "Visual Studio Code.",
    "quels logiciels utilises tu pour coder?" : "Visual Studio Code.",
    "Quel logiciel utilises tu pour coder?" : "Visual Studio Code.",
    "quel logiciel utilises tu pour coder?" : "Visual Studio Code.",
    "Tu code depuis quand?" : "Depuis Mars 2023",
    "tu code depuis quand?" : "Depuis Mars 2023",
    "Tu fais du montage depuis quand?" : "Depuis Décembre 2020",
    "tu fais du montage depuis quand?" : "Depuis Décembre 2020",
    "Quels logiciels utilises tu pour monter?" : "Adobe première pro,Adobe after effect,Davinci Resolve 18.",
    "quels logiciels utilises tu pour monter?" : "Adobe première pro,Adobe after effect,Davinci Resolve 18.",
    "T'es payant?" : "Je me fais paraitre payant pour le moment mais je suis free:) ",
    "t'es payant?" : "Je me fais paraitre payant pour le moment mais je suis free:) ",
    "ta appris comment a coder?" : "Avec internet et plein de pdf remplis de code avec explication. ",
    "Ta appris comment a coder?" : "Avec internet et plein de pdf remplis de code avec explication. ",
    "C'est dur de coder?" : "Le codage web avec le language (html,css c'est simple mais javascript et php des languages un peu plus compliqué) ",
    "c'est dur de coder?" : "Le codage web avec le language (html,css c'est simple mais javascript et php des languages un peu plus compliqué) ",
    "Tu connais quel langage au codage?" : "Intérmédiaire-Expert:HTML,CSS,JS-Débutant: PHP,PYTHON,C++ ",
    "Tu code combien de temps?" : "Environ 5-6h par semaine jusqu'à 10-12h semaine. ",
    "tu code combien de temps?" : "Environ 5-6h par semaine jusqu'à 10-12h semaine. ",
    "Ta pris combien de temps a coder?" : "En 6mois j'ai plutot bien avancer. ",
    "ta pris combien de temps a coder?" : "En 6mois j'ai plutot bien avancer. ",
    "Ta quel âge?" : "T'inquète :) 😁",
    "ta quel âge?" : "T'inquète :) 😁",
    "Ta quel age?" : "T'inquète :)😁 ",
    "ta quel age?" : "T'inquète :)😁 ",
    "On code sur quoi?" : "Sur PC. Confing fluide suffisant. ",
    "on code sur quoi?" : "Sur PC. Confing fluide suffisant. ",
    "On monte avec quel confing?" : "Avec les logiciels gourmands il faut au moins une RTX 2060-I5 10TH GEN pour etre tranquille. ",
    "on monte avec quel confing?" : "Avec les logiciels gourmands il faut au moins une RTX 2060-I5 10TH GEN pour etre tranquille. ",
    "ok" : "de rien ",
    "Ok" : "de rien ",
    "Tu me fais un site?" : "Viens DM INSTA ",
    "tu me fais un site?" : "Viens DM INSTA ",
    "C'est combien les prix?" : "Je vais crée un service + qui sera a 10-30€ sinon le reste est gratuit. ",
    "c'est combien les prix?" : "Je vais crée un service + qui sera a 10-30€ sinon le reste est gratuit. ",
    "Comment on code?" : "Vidéos en ligne,commencez avec des langages simples comme HTML,CSS ",
    "comment on code?" : "Vidéos en ligne,commencez avec des langages simples comme HTML,CSS ",
    "Tu vie du codage" : "Nope ",
    "tu vie du codage" : "Nope ",
    "Le codage sa paye?" : " les pubs,site sponsorisée la on peut se faire un peu d'argent,si tu fais des sites au autres sa ce niveau oui sa monte vite. ",
    "le codage sa paye?" : " les pubs,site sponsorisée la on peut se faire un peu d'argent,si tu fais des sites au autres sa ce niveau oui sa monte vite. ",
    "Ta un diplome?" : "Nope mdrr😅 ",
    "ta un diplome?" : "Nope mdrr😅 ",
    "cool ta vie" : "😒😔",
    "trkl?" : "tqt chu biengg mdrr🤣 ",
    "trkl" : "tqt chu biengg mdrr🤣 ",
    "Y'a moyen j'apprend a coder?" : "Bien sur si ta bsn d'aide viens DM Insta ",
    "Salut" : "Slt! :)  ",
    "salut" : "Slt! :)  ",
    "slt" : "Slt! :)  ",
    "Slt" : "Slt! :)  ",
    "Tu gagnes combien avec le codage ?" : " :)  ",
    "tu gagnes combien avec le codage ?" : " :)  ",
    "Bv" : " Tqt :) ",
    "bv" : " Tqt :) ",
    "Oklm" : " Ouaisss ",
    "oklm" : " Ouaisss  ",
    "Quel est le meilleur logiciel pour commencer a monter?" : " Davinci Resolve 18  ",
    "Comment on cut sur Davinci Resolve 18" : " Click droit-Split à l'endroit souhaité  ",
    "Pourquoi tu t'es lancer dans le codage?" : " Prcq j'ai eu un prof qui a un site sa m'a donné envie,de + je souhaite travailler concrètement dans ce domaine  ",
    "Tu fais du graphisme?" : " Canva,photoshop j'ai essayer je fais des choses pas incroyable,donc je dirais non.  ",
    "On peut coder sur tél?" : " Surement vu la technologie de nos jours mais je pense que c'est pas pratique.  ",
    "Quel est ton langage de code préféré" : "     CSS;Javascript pourtant j'utilise pas beaucoup de javascript mais j'apprécie.  ",
    "biengg?" : " Ouaisss  ",
    "oklm" : " Ouaisss  ",
    "Je peux avoir mes Identifiants?" : " DM MOI INSTA ",
    "Je peux reavoir mes Identifiants?" : " DM MOI INSTA ",
    "Je peux avoir mon mot de passe?" : " DM MOI INSTA ",
    "J'ai oublié mon mot de passe'" : " DM MOI INSTA ",
    "T'es en auto-entreprise?'" : " Nope chuis free ",


"bye" : "Salut!",
    "Bye" : "Salut!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Désolé ,j'ai pas compris (ou ce n'est pas une question fréquentes).<br>";
    }
    }
