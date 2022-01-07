const AuthConfig = {
  issuer: 'https://git.digitalamoeba.id',
  clientId: 'e759b4cec673ee41df5ca6f7671c86e023e7318c7bdd6afb798adec61235438d',
  clientSecret:
    'c09485cbff890236d66a19a1179acaeb66597278a8daea720bda179a1215c351',
  redirectUrl: 'id.digitalamoeba.ideabox.mobile://Login',
  scopes: ['profile', 'email', 'read_user'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://git.digitalamoeba.id/oauth/authorize',
    tokenEndpoint: 'https://git.digitalamoeba.id/oauth/token',
    revocationEndpoint: 'https://git.digitalamoeba.id/oauth/revoke',
  },
};

const defaultAuthState = {
  hasLoggedInOnce: false,
  token: '',
  expireAt: '',
  name: '',
  email: '',
  id: '',
  provider: '',
  provider_id: '',
};
const defaultAuthStateLogin = {
  email: '',
  password: '',
};
const defaulthAuthData = {
  name: '',
  email: '',
  nik: '',
  noTelp: '',
  tglLahir: '',
  pictures: '',
  background: '',
  nikAtasan: '',
  namaAtasan: '',
  loker: '',
  anakPerusahaan: '',
  direktorat: '',
  regional: '',
  teamStructure: '',
};

export { AuthConfig, defaultAuthState, defaultAuthStateLogin, defaulthAuthData };
