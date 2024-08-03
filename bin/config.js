const mainUrl = 'https://api.kanka.io/1.0/';
const campaignUrl = `${mainUrl}campaigns/`;
const locationsUrl = `${mainUrl}locations/`;
const familiesUrl = `${mainUrl}families/`;
const charactersUrl = `${mainUrl}characters/`;
const itemsUrl = `${mainUrl}items/`;
const organisationsUrl = `${mainUrl}organisations/`;

const token = process.env.KANKA_API;

module.exports = {
   mainUrl,
   campaignUrl,
   locationsUrl,
   familiesUrl,
   charactersUrl,
   itemsUrl,
   organisationsUrl,
   token 
};