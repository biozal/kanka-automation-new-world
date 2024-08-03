#!/usr/bin/env node
const { getCampaignId } = require('./campaign.js');
const axios = require('axios');

// Call the function
async function main () {
    const id = await getCampaignId();
    console.log(id);
}

main();