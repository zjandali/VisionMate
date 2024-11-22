// public/js/liveRecommendation.js

document.addEventListener('DOMContentLoaded', () => {
    const homeRow = document.querySelector('.homeRow');
    const backButton = homeRow.querySelector('.buttonContainer a');
    const homeButton = homeRow.querySelector('.buttonContainer a:last-child');

    backButton.addEventListener('click', () => {
        clearStoredData();
    });

    homeButton.addEventListener('click', () => {
        clearStoredData();
    });
});

// Function to clear stored data (implementation based on your data storage method)
function clearStoredData() {
    // Example: Clear localStorage
    localStorage.clear();
}