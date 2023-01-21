const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartConteiner = document.getElementById('shoppingCartConteiner');
const cardsConteiner = document.querySelector('.cards-container');
const productDetailConteiner = document.getElementById('productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    // Para agregar o quitar clases se usa la funcion toggle de classList
    shoppingCartConteiner.classList.add('inactive'); 
    desktopMenu.classList.toggle('inactive');
}

function toggleBurgerMenu(){
    closeProductDetailAside();
    shoppingCartConteiner.classList.add('inactive'); 
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarritoAside(){
    mobileMenu.classList.add('inactive');
    productDetailConteiner.classList.add('inactive');
    shoppingCartConteiner.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartConteiner.classList.add('inactive');
    productDetailConteiner.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailConteiner.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (const product of productList) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    productCard.append(img, productInfo);

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfo.append(productInfoFigure, productInfoDiv);
    cardsConteiner.appendChild(productCard)

}