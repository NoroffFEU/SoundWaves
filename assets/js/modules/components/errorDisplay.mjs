export function displayError(error) {
    const h1 = document.querySelector('h1')
    const errorMessage = document.querySelector('.error')
    const errorText = errorMessage.querySelector('p')
    h1.style.display = 'none'
    h1.style.visibility = 'hidden'
    errorMessage.style.display = 'block'
    errorMessage.style.visibility = 'visible'
    errorText.textContent = error.message
}