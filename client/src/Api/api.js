import axios from 'axios';

const Url = 'http://localhost:8080'

export const sendData = (data) => {
    return axios.post(`${Url}/create`, data)
}

export const getData = () => {
    return axios.get(`${Url}/get`)
}

export const removeData = (deleteId) => {
    return axios.post(`${Url}/delete`, deleteId)
}

export const refreseData = (updateId) => {
    return axios.put(`${Url}/update`, updateId)
}