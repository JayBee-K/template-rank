const handleCountDown = function () {
    const countdownDate = new Date('2023-12-31T00:00:00').getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();

        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('#section-countdown #days').textContent = days;
        document.querySelector('#section-countdown #hours').textContent = hours;
        document.querySelector('#section-countdown #minutes').textContent = minutes;
        document.querySelector('#section-countdown #seconds').textContent = seconds;

        if (distance < 0) {
            document.querySelector('#card-countdown').textContent = 'Hết thời gian đếm ngược';
        }
    }, 1000);
}

window.addEventListener('load', function () {
    handleCountDown();
})