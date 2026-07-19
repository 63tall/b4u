// Function to smoothly transition between pages
function nextPage(currentId, nextId) {
    const current = document.getElementById(currentId);
    const next = document.getElementById(nextId);

    // Fade out current
    current.style.opacity = '0';
    
    setTimeout(() => {
        current.classList.remove('active');
        next.classList.add('active');
        
        // Slight delay to trigger the fade-in animation
        setTimeout(() => {
            next.style.opacity = '1';
        }, 50);
    }, 800); // Wait for fade out to complete
}

// Interactive "No" button logic
const noBtn = document.getElementById('noBtn');

// Move the button when she tries to hover over it (for Desktop)
noBtn.addEventListener('mouseover', moveButton);
// Move the button when she tries to tap it (for Mobile)
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevents the tap from registering
    moveButton();
});

function moveButton() {
    // Generate random coordinates within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Success screen when she clicks "Yes"
function showSuccess() {
    nextPage('page4', 'success');
}