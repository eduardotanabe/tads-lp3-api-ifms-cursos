export default function(cursos, elemento) {
    elemento.innerHTML = ""
    cursos.forEach(curso => {
        elemento.innerHTML += `
            <h2>${curso.curso}</h2>
            <p>Nível de ensino: ${curso.nivelDeEnsino} </p>
            <p>Duração: ${curso.duracao}</p>
            <p>Município: ${curso.municipio}</p>
            `
        })
}
