document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    content.classList.add('visible');

    setInterval(() => {
        content.classList.toggle('pulse');
    }, 3000);
});
