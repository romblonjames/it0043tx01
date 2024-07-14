
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('homeImage').addEventListener('click', function() {
    this.src = 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif';
});
