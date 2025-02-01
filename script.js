// Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Mode Terang';
    } else {
        modeToggle.textContent = 'Mode Gelap';
    }
});

// Expandable Widgets
const expandableWidgets = document.querySelectorAll('.expandable');

expandableWidgets.forEach(widget => {
    const header = widget.querySelector('.widget-header');
    const content = widget.querySelector('.widget-content');
    const arrow = widget.querySelector('.arrow');

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        arrow.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});



