
document.querySelector('.open').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '250px';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '0';
});
