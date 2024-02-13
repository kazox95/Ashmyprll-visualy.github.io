document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le numéro de commande du localStorage
    let orderNumber = localStorage.getItem('orderNumber');
    let orderTotal = localStorage.getItem('orderTotal');

    // Afficher le numéro de commande dans le récapitulatif
    document.getElementById('orderNumber').innerText = orderNumber;

    // Afficher le montant total dans le récapitulatif
    document.getElementById('orderTotal').innerText = orderTotal + '€';

    // Récupérer le panier depuis le localStorage (s'il y a lieu)
    let listCart = JSON.parse(localStorage.getItem('listCart'));

    // Afficher les détails du panier
    let listCartHTML = document.getElementById('listCart');
    
    if (listCart) {
        listCart.forEach(product => {
            let newCartItem = document.createElement('div');
            newCartItem.classList.add('cart-item');
            newCartItem.innerHTML = `
                <div class="item-info">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.display_price}</div>
                    <div class="quantity">${product.quantity}</div>
                </div>
            `;
            listCartHTML.appendChild(newCartItem);
        });
    }

    // Nettoyer le localStorage après utilisation (optionnel)
    localStorage.removeItem('orderNumber');
    localStorage.removeItem('orderTotal');
    localStorage.removeItem('listCart');
});
