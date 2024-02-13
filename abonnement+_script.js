document.addEventListener('DOMContentLoaded', function () {
    
    let orderNumber = localStorage.getItem('orderNumber');
    let orderTotal = localStorage.getItem('orderTotal');
    let listCart = [];

    document.getElementById('orderNumber').innerText = 'Numéro de Commande : ' + orderNumber;
    document.getElementById('orderTotal').innerText = 'Prix Total : ' + orderTotal + '€';

   
    addCartToHTML();
});

let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();
addCartToHTML();
function addCartToHTML() {
  
    let listCartHTML = document.getElementById('listCart');

   
    if (listCartHTML) {
     
        listCartHTML.innerHTML = '';

      
        let totalQuantityHTML = document.querySelector('.totalQuantity');
        let totalPriceHTML = document.querySelector('.totalPrice');
        let totalQuantity = 0;
        let totalPrice = 0;

        if (listCart) {
            listCart.forEach(product => {
                if (product) {
                    let newCartItem = document.createElement('div');
                    newCartItem.classList.add('cart-item'); 
                    newCartItem.innerHTML = `
                        <div class="item-info">
                            <img src="${product.image}" alt="${product.name}" style="max-width: 100px; max-height: 100px;">
                            <div class="name"> Service choisi : ${product.name}</div>
                            <div class="price">  Prix du Service (à l'unité) : ${product.display_price}</div>
                            <div class="quantity"> Quantité : ${product.quantity}</div>
                        </div>
                    `;
                    listCartHTML.appendChild(newCartItem);
                }
            });
        }
    } else {
        console.log('L\'élément avec la classe "list" n\'a pas été trouvé.');
    }
}


function generatePDF() {
    var nom_fichier = prompt("Nom du fichier PDF :");

    if (nom_fichier != null && nom_fichier.trim() !== "") {
        var orderNumber = document.getElementById('orderNumber').innerText;
        var orderTotal = document.getElementById('orderTotal').innerText;

        // Informations importantes stylisées dans un encadré
        var importantInfo = `
            <div style="text-align: center; margin-top: 20px;">
                <h3>Informations importantes</h3>
            </div>
            
              
            <div style="border: 1px solid #ddd; border-radius: 10px; padding: 10px; background-color: #f9f9f9; margin: 10px;">     
                    <strong>Cette facture vous est fournie une seule fois. En cas de problème ou de plainte au Service Après-Vente (SAV), veuillez vous référer au numéro de facture indiqué ci-dessus.</strong>
                </div>
            </div>
        `;

        // Logo et informations personnelles
        var logoAndInfo = `
            <div style="text-align: center; margin-top: 20px;">
                <img src="./LOGOOGOOGO-removebg-preview.png" style="max-width: 225px; max-height: 225px; margin-bottom: 20px;">
            </div>
            <div style="text-align: left; font-weight: bold; margin-bottom: 20px;">
                Responsable: Ashmy_Prl  (Insta ashmy_prl02)
            </div>
        `;

        // Génération du contenu du PDF
        var pdfContent = document.getElementById('orderDetails').outerHTML;

        var items = document.querySelectorAll('.returnCart .list .item');
        items.forEach(item => {
            // Produits stylisés dans un encadré
            var styledItem = `
                <div style="border: 1px solid #ddd; border-radius: 10px; padding: 10px; margin-bottom: 10px; background-color: #f9f9f9;">
                    ${item.outerHTML}
                </div>
            `;
            pdfContent += styledItem;
        });

        // Ajout des informations importantes stylisées dans un encadré
        pdfContent += importantInfo;

        // Ajout du logo et des informations personnelles
        pdfContent = logoAndInfo + pdfContent;

        // Création de l'élément div pour le contenu PDF
        var element = document.createElement('div');
        element.innerHTML = pdfContent;

        // Suppression des boutons de la page du PDF
        element.querySelectorAll('button').forEach(button => {
            button.remove();
        });

        // Options de génération PDF
        var opt = {
            margin: 0.5,
            filename: `Facture de C.M.G_VISUALY.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        // Génération du PDF et téléchargement
        html2pdf().set(opt).from(element).save();
    } else {
        alert("Veuillez choisir un nom valide pour le fichier.");
    }
}
