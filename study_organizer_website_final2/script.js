
// Select all image cards on the homepage
const imageCards = document.querySelectorAll('.image-card');

// Add hover event listener to each image card
imageCards.forEach(card => {
    card.addEventListener('mouseenter', showCaption);
    card.addEventListener('mouseleave', hideCaption);
});

function showCaption(event) {
    // Get the figcaption element within the hovered card
    const caption = event.currentTarget.querySelector('figcaption');
    
    // Add a class to show the overlay (this class will be defined in CSS)
    caption.classList.add('show-overlay');
}

function hideCaption(event) {
    const caption = event.currentTarget.querySelector('figcaption');
    caption.classList.remove('show-overlay');
}
