// api.js
const axios = require('axios');

function getHeaders(token) {
    return {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
    };
}

// Function to call the REST API
async function getApiData(url, token) {

    try {
        const response = await axios.get(url, {
            headers: getHeaders(token) 
        });
        return response.data;
    } catch (error) {
        console.error('Error calling API:', error);
    }
}

module.exports = {
    getApiData,
	getHeaders
};