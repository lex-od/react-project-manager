const getAccessToken = state => state.auth.tokens.accessToken;

const getIsAuth = state => !!getAccessToken(state);

const getRefreshToken = state => state.auth.tokens.refreshToken;

const getSid = state => state.auth.tokens.sid;

const getUserEmail = state => state.auth.user.email;

const getError = state => state.auth.error;

const getLoading = state => state.auth.loading;

const authSelectors = {
    getAccessToken,
    getRefreshToken,
    getSid,
    getIsAuth,
    getUserEmail,
    getError,
    getLoading,
};
export default authSelectors;
