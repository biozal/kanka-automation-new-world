const { campaignUrl, token } = require('./config.js');
const { getData } = require('./api.js');

async function getCampaignId() {
  const campaign = await getData(campaignUrl, token);
  if (campaign && campaign.data && campaign.data.length > 0) {
    return campaign.data[0].id;
  } else {
    throw new Error('No data found');
  }
}

module.exports = {
  getCampaignId,
};
