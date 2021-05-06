const getAccessToken = state => state.auth.tokens.accessToken;
const getRefreshToken = state => state.auth.tokens.refreshToken;
const getSid = state => state.auth.tokens.sid;

const authSelectors = { getAccessToken, getRefreshToken, getSid };
export default authSelectors;
