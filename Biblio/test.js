function bookmark(y) {
    y.classList.toggle("fa-bookmark-o");
    y.classList.toggle("fa-bookmark");
  }
  
  var product= [];
  var cart=[];
function addProduct() {

  var ProductTitle = document.getElementById('titles').innerText;
  var ProductImage = document.getElementById('cart-img').src;
  var ProductPrice = document.getElementById('rate').innerText;
  var ProductQuantity = parseInt(document.getElementById('quantity').value)
  console.log(ProductTitle);
  console.log(ProductPrice);
  console.log(ProductQuantity);
  console.log(ProductImage);
   
  var newProduct = {
    product_title: ' ',
    product_price: 0.00,
    product_quantity: 0,
    product_image: ' ',
  };
  
  newProduct.product_title = ProductTitle;
  newProduct.product_price = ProductPrice;
  newProduct.product_quantity = ProductQuantity;
  newProduct.product_image = ProductImage; 

cart.push(newProduct);

var html = "<table border='1|1' >";
html += "<td>Image</td>";
html += "<td>Book Title</td>";
html += "<td>Quantity</td>";
html += "<td>Price</td>";
html += "<td>Total</td>";
html += "<td>Action</td></tr>";
for (var i = 0; i < cart.length; i++) {
    html += "<tr>";
    html += "<td>" + cart[i].product_image + "</td>";
    html += "<td>" + cart[i].product_title + "</td>";
    html += "<td><input type='number' min='0' value = \"" + cart[i].product_quantity + "\"></td>"
    html += "<td>" + cart[i].product_price  + "</td>";
    html += "<td>" + parseFloat(cart[i].product_price) * (cart[i].product_quantity) + "</td>";
    html += "<td><button type='submit' onClick='deleteProduct(\"" + cart[i].product_title + "\", this);'/>Delete Item</button></td>"
    html += "</tr>";
}
html += "</table>";

document.getElementById("demo").innerHTML = html;
// document.getElementById("demo").innerHTML ='<object type="text/html" data="Cart.html" ></object>';
}

function deleteProduct(product_title, e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].product_title == product_title) {
          // DO NOT CHANGE THE 1 HERE
        cart.splice(i, 1);
      }
  }
}

//   var cartButton = document.getElementById('cart-item').innerHTML;
// console.log(cartButton);
// }


      
// function cartClicked(event){
// var button = event.target;
// var shopItem = button.parentElement.parentElement
// var title = shopItem.getElementsByClassName('title-ab')[0].innerText
// var price = shopItem.getElementsByClassName('rate')[0].innerText
// addItem(title,price)
// }

// function addItem(title, price) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//   for (var i = 0; i < cartItemNames.length; i++) {
//       if (cartItemNames[i].innerText == title) {
//           alert('This item is already added to the cart')
//           return
//       }
//     }
//   }