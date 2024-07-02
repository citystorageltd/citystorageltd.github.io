const scriptURL = 'https://script.google.com/macros/s/AKfycbyBaIhhAf0pHBDG9NsiG4YxuayBoxHMckovVej_71ioUoO5Ig6YEo3LC4ioyKRRZLd91w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})