const drwBtn = document.getElementById('drawButton');
const freeBtn = document.getElementById('freeDrawButton');
const revCheck = document.getElementById('reverseCheck');

let includeReverses = false;

drwBtn.addEventListener("click", function () {
    if (revCheck.checked) {
        includeReverses = true;
        shake();
    }
    window.location.href = "../gameboard.html";
});

function shake() {
    document.body.classList.add("animate");
    setTimeout(function () {
        document.body.classList.remove("animate");
    }, 5000);
}