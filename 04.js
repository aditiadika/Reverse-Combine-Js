var shoppingCart = [];
document.getElementById("itemOne").addEventListener("click", function() {
    shoppingCart.push("One");
});

document.getElementById("itemTwo").addEventListener("click", function() {
    shoppingCart.push("Two");
});

document.getElementById("total").addEventListener("click", function() {
    document.getElementById("display").innerHTML = shoppingCart;
});