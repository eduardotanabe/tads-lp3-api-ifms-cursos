export default function(resource) {
    const url = `http://localhost:3000/${resource}`
    const response = axios.get(url)
    
    return response
}
