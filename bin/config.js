const mainUrl = 'https://api.kanka.io/1.0/';
const campaignUrl = `${mainUrl}campaigns/`;
const token = process.env.KANKA_API;

module.exports = {
   mainUrl,
   campaignUrl,
   token 
};