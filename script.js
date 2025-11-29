const shareButton = document.querySelector('.share-button');
const shareMenu = document.querySelector('.share-menu');

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('active');
    shareMenu.classList.toggle('hidden');
});

