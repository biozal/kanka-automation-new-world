const { campaignUrl, token } = require('./config.js');
const { postData } = require('./api.js');
const { getCampaignId } = require('./campaign.js');
const { readJsonFile } = require('./fileHelper.js');

async function createLocation(fileName) {
  const campaignId = await getCampaignId();
  if (campaignId !== null || campaignId !== undefined) {
    const fileData = readJsonFile(fileName);
    if (fileData !== null && fileData !== undefined && fileData.length > 0) {
      for (let i = 0; i < fileData.length; i++) {
        const location = fileData[i];
        const url = `${campaignUrl}${campaignId}/locations`;
        const response = await postData(url, token, location);
        const data = response.data();
        console.log(data);
      }
    }
  } else {
    throw new Error('campaignId is null or undefined');
  }
}

module.exports = {
  createLocation,
};
