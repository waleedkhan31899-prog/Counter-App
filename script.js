const countDisplay = document.getElementById("count");
const statusText = document.getElementById("status-text");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("Reset");

let count = 0;

function updateUI() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
        statusText.textContent = "The Number is Increase";
    } else if (count < 0) {
        countDisplay.style.color = "red";
        statusText.textContent = "The Number is Decrease";
    } else {
        countDisplay.style.color = "yellow";
        statusText.textContent = "The Number is Neutral";
    }
}

increaseBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateUI();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});

updateUI(); // initial call