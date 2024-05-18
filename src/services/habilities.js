import api from './api'

export const getHability = async () => {
    return api().get('v1/hability').then((response) => {
        return response
    }).catch(({response}) => {
        return response
    })
}