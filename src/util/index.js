export default {
    resJson: (response, statusCode, data)=> {
        response.status = statusCode
        response.body = data
    }
}