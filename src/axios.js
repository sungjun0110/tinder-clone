import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://sj-tinder-backend.herokuapp.com/'
})

export default instance;