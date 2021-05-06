const getAccessToken = state => state.auth.tokens.accessToken;

const getIsAuth = state => !!getAccessToken(state);

const authSelectors = { getAccessToken, getIsAuth };
export default authSelectors;
