let body = document.querySelector('.body');
let main = document.querySelector('body');


// Nav
let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-icon');
let navContent = document.querySelector('.nav-content');
let flexNav = document.querySelector('.flex-nav');
let itemNumbers = document.querySelector('.item-numbers');
let cartIcon = document.querySelector('.cart-icon');
let cartEmpty = document.querySelector('.cart-empty');
let cartFull = document.querySelector('.cart-full');
let cartContent = document.querySelector('.cart-content');
let cartContentTwo = document.querySelector('.cart-content-two');
let cartContentThree = document.querySelector('.cart-content-three');
let cartContentFour = document.querySelector('.cart-content-four');
let deleteIconOne = document.querySelector('.delete-icon-one');
let deleteIconTwo = document.querySelector('.delete-icon-two');
let deleteIconThree = document.querySelector('.delete-icon-three');
let deleteIconFour = document.querySelector('.delete-icon-four');
let checkoutBtn = document.querySelector('.checkout');


// Section One
let sectionOne = document.querySelector('.section-one');
let productOne = document.querySelector('.product-one');
let productTwo = document.querySelector('.product-two');
let productThree = document.querySelector('.product-three');
let productFour = document.querySelector('.product-four');
let prevWhiteBg = document.querySelector('.prev-white-bg');
let nextWhiteBg = document.querySelector('.next-white-bg');
let sneakersCarousel = document.querySelector('.sneakers-carousel');
let slides = document.querySelector('.slides');


// Section Two
let sectionTwo = document.querySelector('.section-two');
let decrement = document.querySelector('.decrement');
let increment = document.querySelector('.increment');
let addToCartBtn = document.querySelector('.add-to-cart-button');
let figure = document.querySelector('.figure');



 
// Opening and Closing Nav Bar

menuIcon.onclick = () => {
 navContent.style.display = 'flex';
 navContent.style.position = 'fixed';
 main.style.overflow = 'hidden';
 body.style.filter = 'blur(.15rem)';
 flexNav.style.pointerEvents = 'none';
 nextWhiteBg.style.pointerEvents = 'none';
}


closeIcon.onclick = () => {
 navContent.style.display = 'none';
 navContent.style.position = 'absolute';
 main.style.overflow = 'auto';
 body.style.filter = 'blur(0)';
 flexNav.style.pointerEvents = 'auto';
 nextWhiteBg.style.pointerEvents = 'auto';
}



// Cart

cartIcon.onclick = () => {
 
 if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 
}


// Increment and Decrement Function

increment.onclick = () => {
 if(figure.textContent >= 4){
  return;
 }
 figure.textContent++;
}

decrement.onclick = () => {
 if(figure.textContent == 0){
  return;
 }
 figure.textContent--;
}


// Add to Cart Button

addToCartBtn.onclick = () => {
 
 cartEmpty.style.display = 'none';
 itemNumbers.style.display = 'block';
 

 if(itemNumbers.textContent == 1){
  cartContentTwo.style.display = 'flex';
 }
 
 if(itemNumbers.textContent == 2){
  cartContentThree.style.display = 'flex';
 }
 
 if(itemNumbers.textContent >= 3){
  cartContentFour.style.display = 'flex';
 } 
 
 if(itemNumbers.textContent == 4){
  cartContentFour.style.display = 'flex';
  return;
 }
 
 itemNumbers.textContent++;
 
 cartIcon.onclick = () => {
  if(getComputedStyle(cartFull).display === 'block'){
  cartFull.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartFull.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 }
 
 
}



// Delete Icons

deleteIconOne.onclick = () => {
 
 cartContent.style.display = 'none';
 itemNumbers.textContent--;
 
 if(itemNumbers.textContent < 1){
 
 cartEmpty.style.display = 'block';
 cartFull.style.display = 'none';
 itemNumbers.style.display = 'none';
 
 cartIcon.onclick = () => {
  cartFull.style.display = 'none';
  
   if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
  
 }
 
}


addToCartBtn.onclick = () => {
 cartContent.style.display = 'flex';
 itemNumbers.style.display = 'block';
 cartEmpty.style.display = 'none';
 prevWhiteBg.style.display = 'block';
 nextWhiteBg.style.display = 'block';
 
 if(itemNumbers.style.display == 'none'){
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 
 if(itemNumbers.textContent == 1){
  cartContentTwo.style.display = 'flex';
 }
 
 if(itemNumbers.textContent == 2){
  cartContentThree.style.display = 'flex';
 }
 
 if(itemNumbers.textContent >= 3){
  cartContentFour.style.display = 'flex';
 } 
 
 if(itemNumbers.textContent == 4){
  cartContentFour.style.display = 'flex';
  return;
 }
 
 itemNumbers.textContent++;
 
 cartIcon.onclick = () => {
  if(getComputedStyle(cartFull).display === 'block'){
  cartFull.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartFull.style.display = 'block';
 prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 }

}
 
}


deleteIconTwo.onclick = () => {
 
 cartContentTwo.style.display = 'none';
 itemNumbers.textContent--;
 
if(itemNumbers.textContent < 1){
 
 cartEmpty.style.display = 'block';
 cartFull.style.display = 'none';
 itemNumbers.style.display = 'none';
 
 cartIcon.onclick = () => {
  cartFull.style.display = 'none';
  
   if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
  
 }
 
}


addToCartBtn.onclick = () => {

 cartContent.style.display = 'flex';
 itemNumbers.style.display = 'block';
 cartEmpty.style.display = 'none';
 prevWhiteBg.style.display = 'block';
 nextWhiteBg.style.display = 'block';
 
 if(itemNumbers.style.display == 'none'){
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 
 if(itemNumbers.textContent == 1){
  cartContentTwo.style.display = 'flex';
 }
 
 if(itemNumbers.textContent == 2){
  cartContentThree.style.display = 'flex';
 }
 
 if(itemNumbers.textContent >= 3){
  cartContentFour.style.display = 'flex';
 } 
 
 if(itemNumbers.textContent == 4){
  cartContentFour.style.display = 'flex';
  return;
 }
 
 itemNumbers.textContent++;

cartIcon.onclick = () => {
  if(getComputedStyle(cartFull).display === 'block'){
  cartFull.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartFull.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 }

}

}


deleteIconThree.onclick = () => {
 
 cartContentThree.style.display = 'none';
 itemNumbers.textContent--;
 
 if(itemNumbers.textContent < 1){
 
 cartEmpty.style.display = 'block';
 cartFull.style.display = 'none';
 itemNumbers.style.display = 'none';
 
 cartIcon.onclick = () => {
  cartFull.style.display = 'none';
  
   if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
  
 }
 
}


addToCartBtn.onclick = () => {
 cartContent.style.display = 'flex';
 itemNumbers.style.display = 'block';
 cartEmpty.style.display = 'none';
 prevWhiteBg.style.display = 'block';
 nextWhiteBg.style.display = 'block';
 
 if(itemNumbers.style.display == 'none'){
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 
 if(itemNumbers.textContent == 1){
  cartContentTwo.style.display = 'flex';
 }
 
 if(itemNumbers.textContent == 2){
  cartContentThree.style.display = 'flex';
 }
 
 if(itemNumbers.textContent >= 3){
  cartContentFour.style.display = 'flex';
 } 
 
 if(itemNumbers.textContent == 4){
  cartContentFour.style.display = 'flex';
  return;
 }
 
 itemNumbers.textContent++;
 
 cartIcon.onclick = () => {
  if(getComputedStyle(cartFull).display === 'block'){
  cartFull.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartFull.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 }

}
 
}


deleteIconFour.onclick = () => {
 
 cartContentFour.style.display = 'none';
 itemNumbers.textContent--;
 
 if(itemNumbers.textContent < 1){
 
 cartEmpty.style.display = 'block';
 cartFull.style.display = 'none';
 itemNumbers.style.display = 'none';
 
 cartIcon.onclick = () => {
  cartFull.style.display = 'none';
  
   if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
  
 }
 
}
 
 
 addToCartBtn.onclick = () => {
 
 cartContent.style.display = 'flex';
 itemNumbers.style.display = 'block';
 cartEmpty.style.display = 'none';
 prevWhiteBg.style.display = 'block';
 nextWhiteBg.style.display = 'block';
 
 if(itemNumbers.style.display == 'none'){
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 
 if(itemNumbers.textContent == 1){
  cartContentTwo.style.display = 'flex';
 }
 
 if(itemNumbers.textContent == 2){
  cartContentThree.style.display = 'flex';
 }
 
 if(itemNumbers.textContent >= 3){
  cartContentFour.style.display = 'flex';
 } 
 
 if(itemNumbers.textContent == 4){
  cartContentFour.style.display = 'flex';
  return;
 }
 
 itemNumbers.textContent++;
 
 cartIcon.onclick = () => {
  if(getComputedStyle(cartFull).display === 'block'){
  cartFull.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartFull.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
 }

}
 
}


// Checkout Button

checkoutBtn.onclick = () => {
 
 prevWhiteBg.style.display = 'block';
 nextWhiteBg.style.display = 'block';
 itemNumbers.style.display = 'none';
 itemNumbers.textContent = '0';
 cartFull.style.display = 'none';
 cartContentTwo.style.display = 'none';
 cartContentThree.style.display = 'none';
 cartContentFour.style.display = 'none';
 
 cartIcon.onclick = () => {
 if(getComputedStyle(cartEmpty).display === 'block'){
  cartEmpty.style.display = 'none';
  prevWhiteBg.style.display = 'block';
  nextWhiteBg.style.display = 'block';
 }
 else{
  cartEmpty.style.display = 'block';
  prevWhiteBg.style.display = 'none';
  nextWhiteBg.style.display = 'none';
 }
}
 
}


// Auto Slider
// So I was trying to create a manual navigation for the sliders but it didn't work out, tried youtube and all, will definitely come back to it but at the moment my head's spinning. Ideas?¿


let slide = document.querySelector('.product');

function carousel() {
 
 setTimeout(() => {
  if (slide.value = 1) {
  productOne.style.display = 'none';
  productTwo.style.display = 'flex';
  }
 }, 2000)
 
 setTimeout(() => {
  if (slide.value = 2) {
  productTwo.style.display = 'none';
  productThree.style.display = 'flex';
  }
 }, 3000)
 
  setTimeout(() => {
  if (slide.value = 3) {
  productThree.style.display = 'none';
  productFour.style.display = 'flex';
  }
 }, 4000)
 
 setTimeout(() => {
  if (slide.value = 3) {
  productFour.style.display = 'none';
  productOne.style.display = 'flex';
  }
 }, 5000)
 
}


setInterval(carousel, 4000);

window.onload = () => carousel();
