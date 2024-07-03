document.getElementById('menu-icon').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '200px';
});

document.getElementById('back-icon').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '0';
});