document.addEventListener('DOMContentLoaded', function () {
    let orderNumber = localStorage.getItem('orderNumber');
    let orderTotal = localStorage.getItem('orderTotal');

    var orderNumberElement = document.getElementById('orderNumber');
    var orderTotalElement = document.getElementById('orderTotal');

    if (orderNumberElement && orderTotalElement) {
        orderNumberElement.innerText = 'Numéro de Commande : ' + orderNumber;
        orderTotalElement.innerText = 'Prix Total : ' + orderTotal + '€';

        addCartToHTML();
    } else {
        console.error('Les éléments avec les IDs orderNumber et orderTotal n\'ont pas été trouvés.');
    }
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

                    // Mettre à jour les totaux
                    totalQuantity += product.quantity;
                    totalPrice += parseFloat(product.actual_price) * product.quantity;
                }
            });
        }

        totalQuantityHTML.innerText = totalQuantity;

        // Assurez-vous que totalPrice est calculé correctement
        totalPrice = parseFloat(totalPrice.toFixed(2));

        if (!isNaN(totalPrice)) {
            totalPriceHTML.innerText = totalPrice.toFixed(2) + '€';
        } else {
            totalPriceHTML.innerText = '$0.00';
        }
    } else {
        console.log('L\'élément avec l\'ID "listCart" n\'a pas été trouvé.');
    }
}

// Reste de votre script...

// Récupérer les informations du client depuis le localStorage
var customerInfo = JSON.parse(localStorage.getItem('customerInfo'));

// Vérifier si les informations existent
if (customerInfo) {
    // Afficher les informations où vous le souhaitez dans votre page
    document.getElementById('customerName').innerText = customerInfo.name;
    document.getElementById('customerPhone').innerText = customerInfo.phone;
    document.getElementById('customerAddress').innerText = customerInfo.address;
    document.getElementById('customerCountry').innerText = customerInfo.country;
}






function generatePDF() {
    var nom_fichier = prompt("Nom du fichier PDF :");

    if (nom_fichier != null && nom_fichier.trim() !== "") {
        var orderNumber = document.getElementById('orderNumber').innerText;
        var orderTotal = document.getElementById('orderTotal').innerText;

        // Récupérer les informations du client depuis le localStorage
        var customerInfo = JSON.parse(localStorage.getItem('customerInfo'));

        // Informations du client stylisées dans un encadré
        var customerInfoBox = `
            <div style="border: 1px solid #ddd; border-radius: 10px; padding: 10px; background-color: #f9f9f9; margin-bottom: 20px;">
                <strong>Informations du Client</strong><br>
                Nom : ${customerInfo.name}<br>
                Téléphone : ${customerInfo.phone}<br>
                Adresse Email : ${customerInfo.address}<br>
                Pays : ${customerInfo.country}
            </div>
        `;

        // Informations importantes stylisées dans un encadré
        var importantInfo = `
            <div style="text-align: center; margin-top: 20px;">
                <h3>Informations importantes</h3>
            </div>

            <div style="border: 1px solid #ddd; border-radius: 10px; padding: 10px; background-color: #f9f9f9; margin: 10px;">     
                <strong>Cette facture vous est fournie une seule fois. En cas de problème ou de plainte au Service Après-Vente (SAV), veuillez vous référer au numéro de facture indiqué ci-dessus.</strong>
              <br>
                <strong>Aucun remboursement ne sera envisageable après l'achat.</strong>
            </div>
        `;

        // Logo et informations personnelles
        var logoAndInfo = `
            <div style="text-align: center; margin-top: 20px;">
                <img src="./LOGOOGOOGO-removebg-preview.png" style="max-width: 150px; max-height: 150px; margin-bottom: 10px;">
            </div>
            <div style="text-align: left; font-weight: bold; margin-bottom: 10px;">
                Responsable: Ashmy_Prl  (Insta ashmy_prl02)
            </div>
        `;

        // Génération du contenu du PDF
        var pdfContent = customerInfoBox + document.getElementById('orderDetails').outerHTML;

        var items = document.querySelectorAll('.returnCart .list .item');
        items.forEach(item => {
            // Produits stylisés dans un encadré avec une taille réduite
            var styledItem = `
                <div style="border: 1px solid #ddd; border-radius: 10px; padding: 5px; margin-bottom: 5px; background-color: #f9f9f9;">
                    ${item.outerHTML}
                </div>
            `;
            pdfContent += styledItem;
        });

        // Ajout des informations importantes stylisées dans un encadré
        pdfContent += importantInfo;

        // Ajout du logo et des informations personnelles
        pdfContent = logoAndInfo + pdfContent;

        // Ajout de la date et de la signature
        var currentDate = new Date().toLocaleString();
        var signature = `
            <div style="text-align: right; margin-top: 20px;">
                <p>Date et heure de génération : ${currentDate}</p>
                <img src="./Signature.png" style="max-width: 1500px; max-height: 5000px;">
            </div>
        `;
        pdfContent += signature;

        // Création de l'élément div pour le contenu PDF
        var element = document.createElement('div');
        element.innerHTML = pdfContent;

        // Options de génération PDF
        var opt = {
            margin: 0.5,
            filename: `Facture_de_C.M.G_VISUALY.pdf`,
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
