const scriptURL = 'https://script.google.com/macros/s/AKfycbx_14f0X0NKpqYxfE4bUD7Vop9mHnX7imE1ioqnEl5O7juSzIqD3o1_XQGduIsZ-3gqaQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
