// api.js
const axios = require('axios');

function getHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
    Accept: 'application/json',
  };
}

// Function to call the REST API
async function getData(url, token) {
  try {
    const response = await axios.get(url, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

async function putData(url, token, data) {
  try {
    const response = await axios.put(url, data, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

async function postData(url, token, data) {
  try {
    const jsonData = JSON.stringify(data);
    const response = await axios.post(url, jsonData, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

module.exports = {
  getData: getData,
  postData: postData,
  putData: putData,
  getHeaders,
};
