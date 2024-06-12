console.log ('connected')
const FORM = document.getElementById('form')
const SENT = document.getElementById('sent')

FORM.addEventListener('submit' , function(e) {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    const p = document.createElement('p')
    p.textContent = 'Hi ${name} thanks for inquiry, we will get back to you as soon as we can' 
    SENT.appendChild(p)
    FORM.reset()
})