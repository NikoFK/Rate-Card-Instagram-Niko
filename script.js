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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah loncatan langsung ke bagian

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Sesuaikan agar tidak tertutup header
                behavior: "smooth"
            });
        }
    });
});

