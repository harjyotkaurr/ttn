function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationModal').style.display = 'block';
    document.body.classList.add('modal-open');
});

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

function proceedForm() {
    closeModal();
    document.getElementById('contactForm').submit();
}