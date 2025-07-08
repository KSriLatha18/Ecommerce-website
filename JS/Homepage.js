// const track = document.getElementById('carouselTrack');
// const itemWidth = 380; 
// let currentIndex = 0;
//         function moveCarousel(direction) {
//   const totalItems = track.children.length;
//   const containerWidth = document.querySelector('.carousel-container').offsetWidth;
//   const visibleItems = Math.floor(containerWidth / itemWidth);
//   const maxIndex = totalItems - visibleItems;

//   currentIndex += direction;
//   if (currentIndex < 0) currentIndex = 0;
//   if (currentIndex > maxIndex) currentIndex = maxIndex;

//   const newTransform = -currentIndex * itemWidth;
//   track.style.transform = `translateX(${newTransform}px)`;
// }

// window.addEventListener("resize", () => {
//   currentIndex = 0;
//   moveCarousel(0); // reset to start
// });


// At the top of your Homepage.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(title, price, description) {
    const existingItemIndex = cart.findIndex(item => item.title === title);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push({ title, price: parseFloat(price), description, quantity: 1 });
    }
    saveCart();
    alert(`${title} has been added to your cart!`); // Optional feedback
}

// Inside your `document.addEventListener('DOMContentLoaded', () => { ... });` block
// This attaches the click behavior to your "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the link from navigating
        const title = button.dataset.title;
        const price = button.dataset.price;
        const description = button.dataset.description;
        addToCart(title, price, description);
    });
});

const track = document.getElementById('carouselTrack');
const itemWidth = 180;
let currentIndex = 0;

function moveCarousel(direction) {
  const totalItems = track.children.length;
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const visibleItems = Math.floor(containerWidth / itemWidth);
  const maxIndex = totalItems - visibleItems;

  currentIndex += direction;

  // Loop properly without gap
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  } else if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  const newTransform = -currentIndex * itemWidth;
  track.style.transform = `translateX(${newTransform}px)`;
}

window.addEventListener("resize", () => {
  currentIndex = 0;
  moveCarousel(0);
});

 

