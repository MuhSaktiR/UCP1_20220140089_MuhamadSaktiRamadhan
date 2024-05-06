var navbar = document.querySelector('.navbar');
var prevScrollpos = window.pageYOffset;

// Menampilkan navbar saat halaman dimuat pertama kali
navbar.classList.remove("hidden");

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("hidden"); // Munculkan navbar saat scroll ke atas
    } else {
        navbar.classList.add("hidden"); // Sembunyikan navbar saat scroll ke bawah
    }
    prevScrollpos = currentScrollPos;
});

navbar.addEventListener('mouseenter', function() {
    navbar.classList.remove("hidden"); // Munculkan navbar saat mouse diarahkan ke atas
});

navbar.addEventListener('mouseleave', function() {
    navbar.classList.add("hidden"); // Sembunyikan navbar saat mouse tidak diarahkan ke atas
});
