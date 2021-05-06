const getAccessToken = state => state.auth.tokens.accessToken;

const getIsAuth = state => !!getAccessToken(state);

const getRefreshToken = state => state.auth.tokens.refreshToken;

const getSid = state => state.auth.tokens.sid;

const authSelectors = { getAccessToken, getRefreshToken, getSid, getIsAuth };
export default authSelectors;
