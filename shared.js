function updateIcon() {
    const html = document.documentElement;
    const darkIcon = document.getElementById('darkIcon');
    if (html.classList.contains('dark-mode')) {
        darkIcon.classList.remove('fa-moon');
        darkIcon.classList.add('fa-sun');
        darkIcon.title = 'Přepnout na světlý režim';
    } else {
        darkIcon.classList.remove('fa-sun');
        darkIcon.classList.add('fa-moon');
        darkIcon.title = 'Přepnout na tmavý režim';
    }
}

function initializeTheme() {
    const html = document.documentElement;
    if (localStorage.getItem('dark-mode') === 'enabled') {
        html.classList.add('dark-mode');
    }
}

function registerThemeToggle() {
    const toggle = document.getElementById('toggleDark');
    toggle.addEventListener('click', () => {
        const html = document.documentElement;
        html.classList.toggle('dark-mode');
        if (html.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
        updateIcon();
    });
}

function loadFooterContent() {
    fetch('footer.html')
        .then(res => res.text())
        .then(footerHtml => {
            const container = document.getElementById('footer-content');
            if (container) {
                container.innerHTML = footerHtml;
            }
        });
}
