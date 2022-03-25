// const fetch = require('node-fetch')
import fetch from 'node-fetch'


const status = response => {
    if(response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }

    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch(todos.json)

