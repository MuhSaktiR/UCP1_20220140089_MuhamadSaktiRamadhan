window.onload = function () {
    var circles = document.getElementsByClassName('circle');

    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', function () {
            this.classList.add('animate');
            var circle = this;
            setTimeout(function () {
                circle.classList.remove('animate');
            }, 1000);
        });
    }
};