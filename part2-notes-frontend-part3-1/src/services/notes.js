import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  console.log("update from front-end")
  console.log(baseUrl)
  console.log(id)
  const request = axios.put(`${baseUrl}/${id}`, newObject).then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
  // return request.then(response => response.data)
}

export default { 
  getAll, create, update 
}