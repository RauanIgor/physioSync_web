document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = cardsContainer.children; // Pega todos os filhos (cards) do container
    const cardCount = cards.length; // Conta a quantidade de cards
    let currentPosition = 0;

    function navigate(direction) {
        const cardWidth = cards[0].offsetWidth; // Pega a largura do primeiro card
        const containerWidth = cardsContainer.offsetWidth; 
        const visibleCardsCount = Math.floor(containerWidth / (cardWidth)); // Calcula quantos cards são visíveis de uma vez
        const maxPosition = cardCount - visibleCardsCount; 

        if (direction === 'next' && currentPosition < maxPosition) {
            currentPosition++;
        } else if (direction === 'prev' && currentPosition > 0) {
            currentPosition--;
        }

        cardsContainer.scrollTo({
            left: currentPosition * cardWidth,
            behavior: 'smooth'
        });
    }

    document.querySelector('.right-arrow').addEventListener('click', function() {
        navigate('next');
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        navigate('prev');
    });
});
