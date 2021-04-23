import axios from 'axios'

const apiCall = async (payload) => {
    console.warn('inside-api-', payload.payload)
 
   const response = await axios({
        method: 'post',
        url: 'http://34.66.149.130/login',
        data: payload.payload,
        headers:{},
    })
    .then((response) => {
        console.warn('success',response)
        return response;
    })
    .catch((response) => {
            console.warn('error',response)
    });
    console.warn('res',response)
   return response;
}
    
export {apiCall}