const apiData = document.querySelector(".cursos")
const listaSuspensa = document.querySelector("#listaSuspensa")

async function listarCursos() {
    const url = "http://localhost:3000/cursosIFMS"
    const response = await axios.get(url)
    const cursos = response.data

    cursos.forEach(curso => {
        apiData.innerHTML += `
            <h2>${curso.curso}</h2>
            <p>Nível de ensino: ${curso.nivelDeEnsino} </p>
            <p>Duração: ${curso.duracao}</p>
            <p>Município: ${curso.municipio}</p>
        `
    });
}

async function getNivelDeEnsino() {
    const url = 'http://localhost:3000/nivelDeEnsino'
    const response = await axios.get(url)
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

    const url = `http://localhost:3000/cursosIFMS?q=${query}`

    const response = await axios.get(url)
    const cursos = Array.from(response.data)

    apiData.innerHTML = ""
    cursos.forEach(curso => {
        apiData.innerHTML += `
            <h2>${curso.curso}</h2>
            <p>Nível de ensino: ${curso.nivelDeEnsino} </p>
            <p>Duração: ${curso.duracao}</p>
            <p>Município: ${curso.municipio}</p>
        `
    })
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