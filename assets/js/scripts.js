const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(".card-body").click(function () {
    $('.card-text').toggle()
})

$(".btn").click(function () {
    alert("El correo fue enviado")
})