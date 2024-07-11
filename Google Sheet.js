const scriptURL = 'https://script.google.com/macros/s/AKfycbxYika_k6TSC8Z8JXhbUQb4wpQD2iAoIWRUfux_q59btazGFFEB_QgvjSBaVhulJh3fPQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
