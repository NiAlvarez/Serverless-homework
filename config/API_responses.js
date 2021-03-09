const Responses = {

    _200(data = {}) {
        return {
            headers: {
                'Content type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*'
            },
            statuCode: 200,
            body: JSON.stringify(data)
        }
    },
    _400(data = {}) {
        return {
            headers: {
                'Content type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*'
            },
            statuCode: 400,
            body: JSON.stringify(data)
        }
    },
    _500(data = {}) {
        return {
            headers: {
                'Content type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*'
            },
            statuCode: 500,
            body: JSON.stringify(data)
        }
    },


}


module.exports = Responses;