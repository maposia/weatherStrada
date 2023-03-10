const buttons = document.querySelectorAll('.weather__link');
const display = document.querySelectorAll('.weather__info');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault()
        const boxNumber = this.getAttribute('data-box')

        buttons.forEach(function(btn) {
            btn.classList.remove('active')
        })

        this.classList.add('active')

        display.forEach(function(display) {
            if (display.getAttribute('data-box') === boxNumber) {
                display.classList.add('show')
            } else {
                display.classList.remove('show')
            }
        })
    })
})