export default {
    resJson: (response, data, statusCode)=> {
        if (data === 'error') statusCode = 400
        if (data === 'ok') statusCode = 200
        response.status = statusCode || 200
        response.body = data
    }
}