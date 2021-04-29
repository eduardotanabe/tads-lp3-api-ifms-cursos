export default function(cursos) {
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
