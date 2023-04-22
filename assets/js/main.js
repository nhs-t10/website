'use strict';

function closeAllDropdowns() {
    document.querySelectorAll('.open').forEach(dropdown => {
        dropdown.classList.remove('open');
    });
}

function closeAllOtherDropdowns(thisDropdown) {
    document.querySelectorAll('.open').forEach(dropdown => {
        if (dropdown !== thisDropdown)
            dropdown.classList.remove('open');
    });
}

// Dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for each dropdown
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        // Event listener for when the text in the nav is clicked
        dropdown.querySelector('h3').addEventListener('click', e => {
            closeAllOtherDropdowns(dropdown)

            dropdown.classList.toggle('open');
            e.stopPropagation(); // Key
        });
    });
    
    window.addEventListener('click', closeAllDropdowns);
});
