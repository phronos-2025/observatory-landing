/**
 * PHRONOS | Observatory Landing Logic
 * Handles the "Signal Filter" ribbon functionality.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Select all filter buttons and cards
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.topic-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Update Active State on Buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Get the Filter Type
            const filterType = btn.getAttribute('data-filter');

            // 3. Loop through cards to show/hide based on classes
            cards.forEach(card => {
                // Reset visibility first
                card.classList.remove('hidden');

                if (filterType === 'all') {
                    // Show all (do nothing, hidden removed)
                    return;
                }

                if (filterType === 'high-risk') {
                    if (!card.classList.contains('filter-high-risk')) {
                        card.classList.add('hidden');
                    }
                }

                if (filterType === 'active') {
                    if (!card.classList.contains('filter-active')) {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

});