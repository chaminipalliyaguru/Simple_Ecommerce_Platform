const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const productPrice = card.querySelector(".price").textContent.toLowerCase();

        if(productName.includes(searchValue) || productPrice.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});