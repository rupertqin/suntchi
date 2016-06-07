export default {
    resJson: (statusCode, response, data)=> {
        response.status = statusCode
        response.body = data
    }
}