import getData from "./modules/comunicacao-com-api"
import renderCards from "./modules/render-cards"

const apiData = document.querySelector(".cursos")
const listaSuspensa = document.querySelector("#listaSuspensa")
const spinner = document.querySelector('.spinner-border')

spinner.style.display = "none"

async function listarCursos() {
    spinner.style.display = "block"
    const response = await getData("cursosIFMS")
    spinner.style.display = "none"
    const cursos = Array.from(response.data)
    renderCards(cursos)
    
    }

    async function getNivelDeEnsino() {
    spinner.style.display = "block"
    const response = await getData("nivelDeEnsino")
    spinner.style.display = "none"
    const nivelDeEnsino = Array.from(response.data)

    nivelDeEnsino.forEach(nivel => {
        listaSuspensa.innerHTML += `<option value="${nivel.description}">${nivel.description}</option>
        `
    })
}

async function search(query) {
    if(query == "Tudo") {
        return listarCursos()
    }

    spinner.style.display = "block"
    const response = await getData(`cursosIFMS?q=${query}`)
    spinner.style.display = "none"
    const cursos = Array.from(response.data)
    renderCards(cursos)
    
}

const btnBuscar = document.querySelector('.btn')
const inputSeach = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click', function() {
    search(inputSeach.value)
})

listaSuspensa.addEventListener('change', function() {
    search(listaSuspensa.value)
})

listarCursos()
getNivelDeEnsino()