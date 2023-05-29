window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});