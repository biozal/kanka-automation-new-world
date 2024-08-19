const mainUrl = 'https://api.kanka.io/1.0/';
const campaignUrl = `${mainUrl}campaigns/`;
const locationsUrl = `locations/`;
const familiesUrl = `families/`;
const charactersUrl = `characters/`;
const itemsUrl = `items/`;
const organisationsUrl = `organisations/`;

// eslint-disable-next-line no-undef
const token = process.env.KANKA_API;

function getLocationUrl(campaignId) {
  return `${campaignUrl}${campaignId}/${locationsUrl}`;
}

function getFamilyUrl(campaignId) {
  return `${campaignUrl}${campaignId}/${familiesUrl}`;
}

function getCharacterUrl(campaignId) {
  return `${campaignUrl}${campaignId}/${charactersUrl}`;
}

function getItemsUrl(campaignId) {
  return `${campaignUrl}${campaignId}/${itemsUrl}`;
}

function getOrganisationsUrl(campaignId) {
  return `${campaignUrl}${campaignId}/${organisationsUrl}`;
}

module.exports = {
  mainUrl,
  campaignUrl,
  getOrganisationsUrl,
  getItemsUrl,
  getCharacterUrl,
  getFamilyUrl,
  getLocationUrl,
  token,
};
