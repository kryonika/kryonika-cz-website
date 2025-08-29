const html = document.documentElement;
const toggle = document.getElementById('toggleDark');
const darkIcon = document.getElementById('darkIcon');

function updateIcon() {
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

if (localStorage.getItem('dark-mode') === 'enabled') {
    html.classList.add('dark-mode');
}
updateIcon();

toggle.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    if (html.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
    updateIcon();
});

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
