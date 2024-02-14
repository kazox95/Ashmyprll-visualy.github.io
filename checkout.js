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
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">${product.display_price}</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">${(product.actual_price * product.quantity + '€')}</div>`;

                listCartHTML.appendChild(newCart);
                totalQuantity += product.quantity;

                totalPrice += parseFloat(product.actual_price) * product.quantity;
            }
        });
    }

    totalQuantityHTML.innerText = totalQuantity;

    // Assurez-vous que totalPrice est calculé correctement
    totalPrice = parseFloat(totalPrice.toFixed(2));  // Arrondir à deux décimales

    if (!isNaN(totalPrice)) {
        totalPriceHTML.innerText = totalPrice.toFixed(2) + '€';
    } else {
        totalPriceHTML.innerText = '$0.00';
    }
}

let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let addressInput = document.getElementById('address');
let countrySelect = document.getElementById('country');
let checkoutButton = document.querySelector('.buttonCheckout');

function updateCheckoutButton() {
    let name = nameInput.value;
    let phone = phoneInput.value;
    let address = addressInput.value;
    let country = countrySelect.value;

    let allFieldsFilled = name && phone && address && country;

    checkoutButton.disabled = !allFieldsFilled;
}

// ...

checkoutButton.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let country = document.getElementById('country').value;

    let allFieldsFilled = name && phone && address && country;

    if (allFieldsFilled) {
        // Récupérer le montant total (totalPrice) à partir du DOM
        let totalPrice = parseFloat(document.querySelector('.totalPrice').innerText.replace('€', ''));

        // Rediriger en fonction du montant total
        if (totalPrice <= 1) {
         
            window.location.href = "lien_montant_inferieur.html";
        } else {
          
          
            let orderNumber = generateOrderNumber();

            // Stocker le numéro de commande dans le localStorage
            localStorage.setItem('orderNumber', orderNumber);

           
            localStorage.setItem('orderTotal', totalPrice.toFixed(2));

         
            localStorage.setItem('listCart', JSON.stringify(listCart));

           
            localStorage.setItem('customerInfo', JSON.stringify({ name, phone, address, country }));

            // Rediriger vers la page abonnement+.html
            window.location.href = "./abonnement+.html";
        }
    } else {
        alert('Veuillez remplir tous les champs du formulaire avant de procéder au paiement.');
    }
});


function generateOrderNumber() {
    return Math.floor(Math.random() * 90000000) + 10000000;
}
