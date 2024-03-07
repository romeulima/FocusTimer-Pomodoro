let darkMode = true

const buttonToggleMode = document.getElementById('toggle')

buttonToggleMode.addEventListener('click', (event) => {
    let mode = darkMode ? 'Light' : 'Dark'
    event.currentTarget.querySelector('span').textContent = `${mode} Mode ativado!`

    document.documentElement.classList.toggle('light')

    darkMode = !darkMode
})