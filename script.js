// script.js

document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('wishPopup').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('wishPopup').style.display = 'none';
});
