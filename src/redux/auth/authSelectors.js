const getAccessToken = state => state.auth.tokens.accessToken;

const authSelectors = { getAccessToken };
export default authSelectors;
