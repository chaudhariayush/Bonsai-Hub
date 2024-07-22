const button = document.getElementById("back-to-top");

button.addEventListener("click", () => {

    window.scrollTo({ top: 0, behavior: "smooth" });


}
)

const BuyButtons = document.getElementsByClassName('buy-buttons');

for (let i = 0; i < BuyButtons.length; i++) {
    BuyButtons[i].addEventListener('click', () => {
        alert("Thank you for purchasing");
    });
}











