var formlogin = document.querySelector('#login')
var formregister = document.querySelector('#register')
var btncolor = document.querySelector('.btncolor')

document.querySelector('#btnlogin')
    .addEventListener('click', () => {
        formlogin.style.left = "25px"
        formregister.style.left = "450px"
        btncolor.style.left = "0px"
    })

document.querySelector('#btnregister')
    .addEventListener('click', () => {
        formlogin.style.left = "-450px"
        formregister.style.left = "25px"
        btncolor.style.left = "99px"
    })
