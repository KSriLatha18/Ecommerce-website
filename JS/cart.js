let cart =JSON.parse(localStorage.getItem('cart'))|| [];

function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
    renderCart();
}

function removeItem(index){
    cart.splice(index,1);
    saveCart();
}

function updateQuantity(index,value)
{
    const qty=parseInt(value);
    if(qty>=1)
    {
        cart[index].quantity=qty;
        saveCart();
    }
}

function clearCart()
{
    if(confirm('Are you sure you want to clear the cart?'))
    {
        cart=[];
        saveCart();
    }
}

function renderCart()
{
    const container = document.getElementById('cart-items');
    const totalBox=document.getElementById('cart-total');
    container.innerHTML='';

    if(cart.length===0)
    {
        container.innerHTML='<p>Your cart is empty.</p>';
        totalBox.innerHTML='';
        return;
    }
    let total=0;
    cart.forEach((item,index)=>{
        if(!item.quantity) item.quantity=1;
        if(!item.price) item.price=100;

        const subtotal=item.quantity*item.price;
        total+=subtotal;

        const div=document.createElement('div');
        div.className='cart-item';
        div.innerHTML=`<div><strong>${item.title}</strong><br><small>${item.description} </small></div>
        <div>
        Qty:<input type="number" min="1" value="${item.quantity}"onchange="updateQuantity(${index},this.value)"></div><div>Price: Rs${item.price} <br> Subtotal: Rs.${subtotal}</div><div><button class="btn btn-remove" onclick="removeItem(${index})">
        Remove</button></div>`;
        container.appendChild(div);
    });
    totalBox.innerHTML=`<strong>Total: Rs.${total}</strong>`;
}
renderCart();

// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCart(); // Call renderCart after saving to update the display
// }

// function removeItem(index) {
//     cart.splice(index, 1);
//     saveCart();
// }

// function updateQuantity(index, value) {
//     const qty = parseInt(value);
//     if (!isNaN(qty) && qty >= 1) { // Add isNaN check
//         cart[index].quantity = qty;
//         saveCart();
//     }
// }

// function clearCart() {
//     if (confirm('Are you sure you want to clear the cart?')) {
//         cart = [];
//         saveCart();
//     }
// }

// function renderCart() {
//     const container = document.getElementById('cart-items');
//     const totalBox = document.getElementById('cart-total');

//     // Ensure elements exist before trying to manipulate them
//     if (!container || !totalBox) {
//         console.error("Cart display elements not found. Make sure IDs 'cart-items' and 'cart-total' exist in your HTML.");
//         return;
//     }

//     container.innerHTML = ''; // Clear previous content

//     if (cart.length === 0) {
//         container.innerHTML = '<p>Your cart is empty.</p>';
//         totalBox.innerHTML = ''; // Clear total if cart is empty
//         return;
//     }

//     let total = 0;
//     cart.forEach((item, index) => {
//         // Ensure item properties exist and are of correct type
//         if (!item.quantity || isNaN(item.quantity)) item.quantity = 1;
//         if (!item.price || isNaN(item.price)) item.price = 0; // Default price to 0 if not set or invalid

//         const itemPrice = parseFloat(item.price); // Ensure price is a number
//         const subtotal = item.quantity * itemPrice;
//         total += subtotal;

//         const div = document.createElement('div');
//         div.className = 'cart-item';
//         // Corrected item.title and added toFixed(2) for price display
//         div.innerHTML = `
//             <div>
//                 <strong>${item.title}</strong><br>
//                 <small>${item.description || ''}</small>
//             </div>
//             <div>
//                 Qty: <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
//             </div>
//             <div>
//                 Price: Rs.${itemPrice.toFixed(2)} <br>
//                 Subtotal: Rs.${subtotal.toFixed(2)}
//             </div>
//             <div>
//                 <button class="btn btn-remove" onclick="removeItem(${index})">Remove</button>
//             </div>
//         `;
//         container.appendChild(div);
//     });

//     // Corrected "Total" string and added toFixed(2) for total display
//     totalBox.innerHTML = `<strong>Total: Rs.${total.toFixed(2)}</strong>`;
// }

// // Call renderCart() when the script loads to display the initial cart state
// renderCart();